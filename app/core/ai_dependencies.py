from app.ai.factory import AIProviderFactory


def get_ai_provider():
    return AIProviderFactory.get_provider()