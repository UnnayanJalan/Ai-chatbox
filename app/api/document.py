from fastapi import APIRouter
from fastapi import Depends
from fastapi import UploadFile
from fastapi import File

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.services.document_service import DocumentService

from app.schemas.document import UploadResponse

from app.models.user import User

from app.core.dependencies import get_current_user


router = APIRouter(
    prefix="/documents",
    tags=["Documents"]
)


@router.post(
    "/upload",
    response_model=UploadResponse
)
def upload_document(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    document = DocumentService.upload(
        db,
        current_user,
        file
    )

    return {

        "document_id": document.id,

        "filename": document.filename,

        "message": "Document uploaded successfully."

    }