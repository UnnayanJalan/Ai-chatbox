from fastapi import APIRouter

from fastapi import Depends

from app.schemas.chat import ChatRequest

from app.models.user import User

from app.core.dependencies import get_current_user

from app.services.rag_service import RAGService

router = APIRouter(
    prefix="/rag",
    tags=["RAG"]
)


@router.post("/ask")
def ask(

    request: ChatRequest,

    current_user: User = Depends(
        get_current_user
    )

):

    answer = RAGService.ask(

        current_user,

        request.message

    )

    return {

        "response": answer

    }