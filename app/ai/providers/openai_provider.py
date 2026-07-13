from openai import OpenAI

from app.ai.providers.base import AIProvider

from app.core.config import settings


class OpenAIProvider(AIProvider):

    def __init__(self):

        self.client = OpenAI(
            api_key=settings.OPENAI_API_KEY
        )

        self.model = settings.OPENAI_MODEL

    def chat(self, messages: list[dict]):

        response = self.client.chat.completions.create(
        model=self.model,
        messages=messages,
        temperature=0.7,
        )

        def generate(
            self,
            system_prompt: str,
            user_prompt: str
        ):

            response = self.client.chat.completions.create(

                model=self.model,

                messages=[

                    {
                        "role":"system",
                        "content":system_prompt
                    },

                    {
                        "role":"user",
                        "content":user_prompt
                    }

                ]

            )

            return response.choices[0].message.content
