from sqlalchemy.orm import Session

from app.ai.factory import AIProviderFactory
from app.ai.prompt_manager import PromptManager

from app.repositories.chat_repository import ChatRepository


class ChatService:

    @staticmethod
    def chat(
        db: Session,
        user,
        message: str
    ):

        history = ChatRepository.get_recent_messages(
            db,
            user.id
        )

        messages = [

            {
                "role": "system",
                "content": PromptManager.system_prompt()
            }

        ]

        history.reverse()

        for item in history:

            messages.append(

                {
                    "role": item.role,
                    "content": item.content
                }

            )

        messages.append(

            {
                "role": "user",
                "content": message
            }

        )

        provider = AIProviderFactory.get_provider()

        ai_response = provider.chat(messages)

        ChatRepository.save_message(
            db,
            user.id,
            "user",
            message
        )

        ChatRepository.save_message(
            db,
            user.id,
            "assistant",
            ai_response
        )

        return ai_response