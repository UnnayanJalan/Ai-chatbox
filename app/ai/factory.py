from app.ai.providers.claude_provider import ClaudeProvider
from app.ai.providers.gemini_provider import GeminiProvider
from app.core.config import settings

from app.ai.providers.openai_provider import OpenAIProvider
from app.ai.providers.ollama_provider import OllamaProvider


class AIProviderFactory:

    @staticmethod
    def get_provider():

        provider = settings.AI_PROVIDER.lower()

        if provider == "openai":
            return OpenAIProvider()
        
        if provider == "gemini":
            return GeminiProvider()
        
        if provider == "claude":
            return ClaudeProvider()
        
        elif provider == "ollama":
            return OllamaProvider()

        raise Exception("Unsupported AI Provider: {provider}")