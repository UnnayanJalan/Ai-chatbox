from app.services.openai_service import OpenAIService


class ChatService:

    @staticmethod
    def generate_response(message: str):

        return OpenAIService.chat(message)