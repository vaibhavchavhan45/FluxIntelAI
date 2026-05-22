from langchain_voyageai import VoyageAIEmbeddings
from config import VOYAGE_API_KEY

def create_embeddings():
    """
    Initializes and returns VoyageAI embedding model.
    """

    embedding = VoyageAIEmbeddings(
        model="voyage-3",
        voyage_api_key=VOYAGE_API_KEY
    )

    return embedding