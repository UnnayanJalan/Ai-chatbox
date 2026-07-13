import chromadb

client = chromadb.PersistentClient(
    path="app/chroma_db"
)

collection = client.get_or_create_collection(
    "documents"
)


class ChromaStore:

    @staticmethod
    def add_document(
        document_id,
        user_id,
        chunks,
        embeddings
    ):

        ids = []

        metadatas = []

        for i in range(len(chunks)):

            ids.append(
                f"{document_id}_{i}"
            )

            metadatas.append({

                "user_id": str(user_id),

                "document_id": str(document_id),

                "chunk": str(i)

            })

        collection.add(

            ids=ids,

            documents=chunks,

            embeddings=embeddings,

            metadatas=metadatas

        )

    @staticmethod
    def search(
        embedding,
        user_id,
        k=5
    ):

        result = collection.query(

            query_embeddings=[embedding],

            n_results=k,

            where={

                "user_id": str(user_id)

            }

        )

        return result["documents"][0]