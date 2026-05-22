from pinecone import Pinecone
from langchain_pinecone import PineconeVectorStore
from langchain_core.documents import Document
from config import PINECONE_API_KEY, PINECONE_INDEX_NAME

def check_embeddings_exist(videoId: str):
    pc = Pinecone(api_key=PINECONE_API_KEY)
    index = pc.Index(PINECONE_INDEX_NAME)
    stats = index.describe_index_stats()
    namespaces = stats.get("namespaces", {})
    return videoId in namespaces

def save_chunks_to_pinecone(chunks, embedding, videoId: str):
    documents = []
    for item in chunks:
        documents.append(
            Document(
                page_content=item["text"],
                metadata={
                    "start_time": item["start_time"],
                    "end_time": item["end_time"],
                    "chunk_number": item["chunk_number"],
                    "video_id": videoId,
                    "source": "Youtube"
                }
            )
        )
    PineconeVectorStore.from_documents(
        documents=documents,
        embedding=embedding,
        index_name=PINECONE_INDEX_NAME,
        namespace=videoId
    )

def load_pinecone_index(videoId: str, embedding_model):
    if not check_embeddings_exist(videoId):
        raise Exception("Pinecone index not found for this video")
    return PineconeVectorStore(
        index_name=PINECONE_INDEX_NAME,
        embedding=embedding_model,
        namespace=videoId
    )