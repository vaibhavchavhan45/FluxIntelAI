from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import (
    RunnableSequence,
    RunnableParallel,
    RunnableLambda,
    RunnablePassthrough
)

from services.core_rag.embedding_service import create_embeddings
from services.core_rag.vector_store_service import load_pinecone_index
from config import GROQ_API_KEY
import os

from services.core_rag.rag_filters_service import (
    deduplicate_text,
    apply_token_limit
)
from services.core_rag.rag_reranker_service import rerank_documents
from services.core_rag.rag_formatter_service import format_docs_with_metadata


def build_rag_chain(videoId: str):
    """
        Builds and returns a Runnable chain:
        Flow : retriever | deduplication | rerank | token_limit | format_docs_metadata
        Returns data_chain, template, model for streaming
    """

    embedding_model = create_embeddings()

    try:
        vector_store = load_pinecone_index(videoId, embedding_model)
    except Exception as e:
        raise ValueError(f"Vector store not found for video {videoId}. Process video first.")

    retriever = vector_store.as_retriever(
        search_type="mmr",
        search_kwargs={
            "fetch_k": 15,
            "k": 7,
            "lambda_mult": 0.5
        }
    )

    template = PromptTemplate(
        template="""You are a helpful AI assistant specialized in answering questions about YouTube video content.

    Your task is to provide accurate, concise answers based STRICTLY on the provided video transcript context.

    CRITICAL RULES:
    1. Answer ONLY using information from the context below
    2. Do NOT use any external knowledge or make assumptions
    3. If the answer is not in the context, respond: "I couldn't find this information in the video."
    4. Be direct and concise - avoid unnecessary elaboration
    5. DO NOT add meta-commentary like "according to the video", "as presented in the transcript", "based on the context", or similar phrases
    6. Write as if YOU are explaining directly to the user, not referring to a third-party source
    7. Answer in a natural, conversational tone without mentioning the transcript or video
    8. Always maintain a polite, professional, and respectful tone regardless of how the user phrases their question
    9. If the user uses inappropriate language or behaves rudely, respond calmly and professionally without matching their tone
    10. Never use offensive, rude, or inappropriate language in your responses
    11. If the user's message is a conversational follow-up referring to something you already said — use the Conversation History below to answer. Do NOT say "I couldn't find this in the video" for these cases.

    CONVERSATIONAL FOLLOW-UP SIGNALS:
    Treat the user's message as a follow-up to your previous answer (use Conversation History, not Context) when it matches any of these patterns:

    Rephrase / Re-explain:
    - "tell me again", "say that again", "repeat that"
    - "explain again", "explain it again", "explain that again", "can you explain?", "explain this", "explain more"
    - "I didn't understand", "I don't understand", "didn't get it", "don't get it"
    - "what do you mean?", "what did you mean?", "what does that mean?"
    - "I'm confused", "that's confusing", "I'm not following"
    - "can you rephrase?", "rephrase that", "say it differently"
    - "simplify that", "can you simplify?", "make it simpler", "in simple words", "in simple terms", "ELI5", "explain like I'm five"

    Elaborate / Go deeper:
    - "elaborate", "can you elaborate?", "elaborate on that"
    - "tell me more", "more details", "give me more", "more on that"
    - "go deeper", "dive deeper", "expand on that", "expand further"
    - "can you detail that?", "in detail", "with more detail"

    Summarize previous answer:
    - "summarize that", "give me a summary", "sum it up", "tldr"
    - "in brief", "briefly", "short version", "quick summary"
    - "key points", "main points", "key takeaways"

    Continue / What else:
    - "continue", "go on", "keep going", "and then?", "what else?"
    - "anything else?", "what more?", "is there more?", "next", "what's next?"

    Ambiguous short questions (apply ONLY when Conversation History is non-empty):
    - A single word or very short phrase like "why?", "how?", "how so?", "really?", "are you sure?", "is that correct?", "confirm that", "give me an example", "example?"
    - For these, first check if they refer to your previous answer in Conversation History. If yes, answer from Conversation History. If Conversation History is empty, treat it as a content question and use Context.

    Conversation so far:
    {chat_history}

    Context:
    {context}

    User Question:
    {question}

    Answer:
    """,
        input_variables=['chat_history', 'context', 'question']
    )

    model = ChatOpenAI(
        model='openai/gpt-oss-120b',
        openai_api_key=os.getenv('GROQ_API_KEY'),
        openai_api_base='https://api.groq.com/openai/v1',
        streaming=True
    )

    # chain structure
    shared_pipeline = RunnableSequence(
        retriever,
        RunnableLambda(deduplicate_text),
    )

    input_chain = RunnableParallel({
        "data": RunnableSequence(
            RunnableLambda(lambda x: x["question"] if isinstance(x, dict) else x),
            shared_pipeline
        ),
        "question": RunnableLambda(lambda x: x["question"] if isinstance(x, dict) else x)
    })

    data_chain = RunnableSequence(
        input_chain,
        RunnableLambda(lambda x: rerank_documents(x["question"], x["data"])),
        RunnableLambda(apply_token_limit),
        RunnableLambda(format_docs_with_metadata),
    )

    return data_chain, template, model