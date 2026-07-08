from app.ai.providers.base import AIProvider


class GeminiProvider(AIProvider):

    def chat(
        self,
        messages
    ):
        ...