import requests

from app.ai.providers.base import AIProvider
from app.core.config import settings


class OllamaProvider(AIProvider):

    def __init__(self):
        self.base_url = settings.OLLAMA_BASE_URL
        self.model = settings.OLLAMA_MODEL

    def chat(self, messages: list[dict]) -> str:

        response = requests.post(
            f"{self.base_url}/api/chat",
            json={
                "model": self.model,
                "messages": messages,
                "stream": False
            },
            timeout=120
        )

        response.raise_for_status()

        data = response.json()

        return data["message"]["content"]
    
    
    def generate(
        self,
        system_prompt: str,
        user_prompt: str
    ):
        messages = [
            {
                "role": "system",
                "content": system_prompt
            },
            {
                "role": "user",
                "content": user_prompt
            }
        ]

        return self.chat(messages)