from fastapi import FastAPI
from app.api.auth import router as auth_router

from app.api.chat import router as chat_router
from app.api.document import router as document_router
from app.api.rag import router as rag_router



app = FastAPI(
    title="AI ChatBot API",
    version="1.0.0"
)

app.include_router(auth_router)
app.include_router(chat_router)
app.include_router(document_router)
app.include_router(rag_router)

@app.get("/")
def home():
    return {
        "message": "AI ChatBot API Running"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }
