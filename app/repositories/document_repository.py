from sqlalchemy.orm import Session

from app.models.document import Document


class DocumentRepository:

    @staticmethod
    def create(
        db: Session,
        user_id: int,
        filename: str,
        filepath: str
    ):

        document = Document(
            user_id=user_id,
            filename=filename,
            filepath=filepath
        )

        db.add(document)

        db.commit()

        db.refresh(document)

        return document