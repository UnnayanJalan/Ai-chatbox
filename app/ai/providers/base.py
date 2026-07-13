from abc import ABC, abstractmethod


class AIProvider(ABC):

    @abstractmethod
    def chat(
        self,
        messages: list[dict]
    ) -> str:
        pass

    @abstractmethod
    def generate(
        self,
        system_prompt: str,
        user_prompt: str
    ) -> str:
        pass