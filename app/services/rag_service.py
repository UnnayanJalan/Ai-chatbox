from app.ai.embeddings.factory import EmbeddingFactory

from app.ai.vectorstores.chroma_store import ChromaStore

from app.ai.factory import AIProviderFactory


class RAGService:

    @staticmethod
    def ask(
        user,
        question
    ):

        embedding_provider = EmbeddingFactory.get()

        query_embedding = embedding_provider.embed_query(
            question
        )

        documents = ChromaStore.search(

            embedding=query_embedding,

            user_id=user.id,

            k=5

        )

        context = "\n\n".join(documents)

        provider = AIProviderFactory.get_provider()

        return provider.generate(

            system_prompt="""
You are an AI assistant.

Answer ONLY from the provided context.

If the answer is not present,
say you don't know.
""",

            user_prompt=f"""

Context

{context}

Question

{question}

"""

        )