from sqlalchemy.orm import Session

from app.models.chat_history import ChatHistory


class ChatRepository:

    @staticmethod
    def save_message(
        db: Session,
        user_id: int,
        role: str,
        content: str
    ):

        message = ChatHistory(

            user_id=user_id,

            role=role,

            content=content
        )

        db.add(message)

        db.commit()

        db.refresh(message)

        return message

    @staticmethod
    def get_recent_messages(
        db: Session,
        user_id: int,
        limit: int = 20
    ):

        return (
            db.query(ChatHistory)

            .filter(
                ChatHistory.user_id == user_id
            )

            .order_by(ChatHistory.id.desc())

            .limit(limit)

            .all()
        )