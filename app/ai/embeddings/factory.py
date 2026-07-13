from app.core.config import settings

from app.ai.embeddings.openai_embeddings import (
    OpenAIEmbeddingProvider
)

from app.ai.embeddings.ollama_embeddings import (
    OllamaEmbeddingProvider
)


class EmbeddingFactory:

    @staticmethod
    def get():

        if settings.AI_PROVIDER == "openai":
            return OpenAIEmbeddingProvider()

        if settings.AI_PROVIDER == "ollama":
            return OllamaEmbeddingProvider()

        raise Exception("Embedding provider not found")