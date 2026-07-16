from app.ai.embeddings.factory import EmbeddingFactory
from app.ai.vectorstores.chroma_store import ChromaStore

provider = EmbeddingFactory.get()

query = "What is the leave policy?"

embedding = provider.embed_query(query)

results = ChromaStore.search(
    embedding=embedding,
    user_id=1,
    k=3
)

for i, chunk in enumerate(results):
    print(f"\nChunk {i+1}\n")
    print(chunk)