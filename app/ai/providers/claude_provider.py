from app.ai.providers.base import AIProvider


class ClaudeProvider(AIProvider):

    def chat(
        self,
        messages
    ):
        ...