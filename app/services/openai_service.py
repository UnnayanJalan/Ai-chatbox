from openai import OpenAI

from app.core.config import settings


client = OpenAI(
    api_key=settings.OPENAI_API_KEY
)


class OpenAIService:

    @staticmethod
    def chat(prompt: str):

        response = client.chat.completions.create(

            model=settings.OPENAI_MODEL,

            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are an intelligent AI assistant. "
                        "Answer clearly and accurately."
                        "You are a helpful AI assistant."
                    )
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],

            temperature=0.7,
        )

        return response.choices[0].message.content