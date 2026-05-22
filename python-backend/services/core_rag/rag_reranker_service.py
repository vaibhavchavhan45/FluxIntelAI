from typing import List
from langchain_core.documents import Document
import voyageai
from config import VOYAGE_API_KEY

client = None

def get_voyage_client():
    global client
    if client is None:
        client = voyageai.Client(api_key=VOYAGE_API_KEY)
    return client

def rerank_documents(question: str, docs: List[Document]) -> List[Document]:
    voyage = get_voyage_client()
    texts = [doc.page_content for doc in docs]
    
    result = voyage.rerank(
        query=question,
        documents=texts,
        model="rerank-2",
        top_k=len(docs)
    )
    
    return [docs[r.index] for r in result.results]