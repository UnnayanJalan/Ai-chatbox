import os
import shutil

from fastapi import UploadFile

from sqlalchemy.orm import Session

from app.ai.embeddings.factory import EmbeddingFactory
from app.ai.vectorstores.chroma_store import ChromaStore
from app.repositories.document_repository import DocumentRepository

from app.utils.pdf_loader import PDFLoader

from app.utils.text_splitter import TextChunker


UPLOAD_DIR = "app/uploads"


class DocumentService:

    @staticmethod
    def upload(
        db: Session,
        user,
        file: UploadFile
    ):

        os.makedirs(
            UPLOAD_DIR,
            exist_ok=True
        )

        filepath = os.path.join(
            UPLOAD_DIR,
            file.filename
        )

        with open(filepath, "wb") as buffer:

            shutil.copyfileobj(
                file.file,
                buffer
            )

        document = DocumentRepository.create(
            db,
            user.id,
            file.filename,
            filepath
        )

        # Extract text from PDF
        text = PDFLoader.extract_text(filepath)

        # Split text into chunks
        chunks = TextChunker.split(text)

        # Generate embeddings
        embedding_provider = EmbeddingFactory.get()

        embeddings = embedding_provider.embed_documents(chunks)

        # Store in ChromaDB
        ChromaStore.add_document(
            document.id,
            user.id,
            chunks,
            embeddings
        )

        print("=" * 50)
        print("DOCUMENT")
        print(document.filename)
        print("=" * 50)
        print(f"Characters : {len(text)}")
        print(f"Chunks : {len(chunks)}")
        print("=" * 50)

        return document