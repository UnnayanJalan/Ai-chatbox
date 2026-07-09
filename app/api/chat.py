from fastapi import APIRouter, Depends

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat_service import ChatService
from app.models.user import User
from app.core.dependencies import get_current_user
from sqlalchemy.orm import Session
from app.database.database import get_db

router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


# @router.post("", response_model=ChatResponse)
# def chat(
#     request: ChatRequest,
#     current_user: User = Depends(get_current_user),
# ):

#     response = ChatService.chat(request.message)

#     return {
#         "response": response
#     }

@router.post("", response_model=ChatResponse)
def chat(
    request: ChatRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    response = ChatService.chat(
        db=db,
        user=current_user,
        message=request.message
    )

    return {
        "response": response
    }