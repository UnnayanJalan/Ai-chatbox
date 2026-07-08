from app.services.openai_service import OpenAIService
from app.ai.factory import AIProviderFactory
from app.ai.prompt_manager import PromptManager


class ChatService:

    @staticmethod
    def chat(user_message: str):

        provider = AIProviderFactory.get_provider()

        messages = [
            {
                "role": "system",
                "content": PromptManager.system_prompt()
            },
            {
                "role": "user",
                "content": user_message
            }
        ]

        return provider.chat(messages)