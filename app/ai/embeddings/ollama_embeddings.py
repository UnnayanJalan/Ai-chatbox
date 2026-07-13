import requests

from app.core.config import settings


class OllamaEmbeddingProvider:

    def embed_documents(
        self,
        texts: list[str]
    ):

        vectors = []

        for text in texts:

            response = requests.post(

                f"{settings.OLLAMA_BASE_URL}/api/embeddings",

                json={

                    "model": "nomic-embed-text",

                    "prompt": text

                }

            )

            vectors.append(
                response.json()["embedding"]
            )

        return vectors

    def embed_query(
        self,
        text
    ):

        response = requests.post(

            f"{settings.OLLAMA_BASE_URL}/api/embeddings",

            json={

                "model": "nomic-embed-text",

                "prompt": text

            }

        )

        return response.json()["embedding"]