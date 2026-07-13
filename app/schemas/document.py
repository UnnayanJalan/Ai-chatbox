from pydantic import BaseModel


class UploadResponse(BaseModel):

    document_id: int

    filename: str

    message: str