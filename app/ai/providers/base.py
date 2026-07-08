from abc import ABC
from abc import abstractmethod


class AIProvider(ABC):

    @abstractmethod
    def chat(
        self,
        messages: list[dict]
    ) -> str:
        pass