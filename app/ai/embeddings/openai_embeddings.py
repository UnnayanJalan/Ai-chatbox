from openai import OpenAI

from app.core.config import settings

client = OpenAI(
    api_key=settings.OPENAI_API_KEY
)


class OpenAIEmbeddingProvider:

    def embed_documents(
        self,
        texts: list[str]
    ):

        response = client.embeddings.create(
            model="text-embedding-3-small",
            input=texts
        )

        return [
            item.embedding
            for item in response.data
        ]

    def embed_query(
        self,
        text: str
    ):

        response = client.embeddings.create(
            model="text-embedding-3-small",
            input=text
        )

        return response.data[0].embedding