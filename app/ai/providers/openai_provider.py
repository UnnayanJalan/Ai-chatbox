from openai import OpenAI

from app.ai.providers.base import AIProvider

from app.core.config import settings


class OpenAIProvider(AIProvider):

    def __init__(self):

        self.client = OpenAI(
            api_key=settings.OPENAI_API_KEY
        )

    def chat(self, messages: list[dict]):

        response = self.client.chat.completions.create(

            model=settings.OPENAI_MODEL,

            messages=messages,

            temperature=0.7,
        )

        return response.choices[0].message.content