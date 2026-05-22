from services.core_rag.transcript_service import fetch_transcript
from services.core_rag.splitting_service import text_splitting
from services.core_rag.embedding_service import create_embeddings
from services.core_rag.vector_store_service import (
    save_chunks_to_pinecone, 
    check_embeddings_exist
)

from services.application_services.video_state_management_service import(
    set_video_state,
    STATUS_PROCESSING,
    STATUS_READY,
    STATUS_FAILED
)

def process_video_service(videoId: str, languages: str, title: str = "", user_id: str = ""):
    print("Starting process video service")
    try:
        # check that embedding are already exist or not
        def check_embeddings_exist(videoId: str):
            pc = Pinecone(api_key=PINECONE_API_KEY)
            index = pc.Index(PINECONE_INDEX_NAME)
            stats = index.describe_index_stats()
            namespaces = stats.namespaces
            return videoId in namespaces

        # set the state as processing
        set_video_state(videoId, STATUS_PROCESSING, languages, title=title, user_id=user_id)

        # fetch transcript
        transcript = fetch_transcript(videoId, languages)

        # text splitting
        chunks = text_splitting(transcript)
        print("Total chunks created : ", len(chunks))
        print("Sample chunk : ", chunks[0]["text"])

        # embeddings
        embedding = create_embeddings()
        print("Embeddings model initialised successfully")

        # Save to chroma
        save_chunks_to_pinecone(chunks, embedding, videoId)
        print("Saved to Pinecone successfully")

        set_video_state(videoId, STATUS_READY, languages, title=title, user_id=user_id)

        return {
            "message" : "transcript fetched successfully",
            "video_id" : videoId,
            "languages" : languages,
            "total_chunks" : len(chunks),
            "already_exists" : False,
            "status" : STATUS_READY
        }

    except Exception as e:
        print(e)
        set_video_state(videoId, STATUS_FAILED, languages, str(e))
        return{
            "status" : STATUS_FAILED,
            "error" : str(e),
            "video_id" : videoId
        }
