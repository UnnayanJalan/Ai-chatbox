from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from fastapi.security import OAuth2PasswordRequestForm

from app.core.dependencies import get_current_user
from app.models.user import User

from app.database.database import get_db

from app.schemas.auth import (RegisterRequest, LoginRequest, TokenResponse,)

from app.services.auth_service import (create_user, authenticate,)

from app.models.user import User

from app.core.security import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.get("/me")
def me(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "name": current_user.name,
        "email": current_user.email,
    }

# @router.post("/chat")
# def chat(
#     message: ChatRequest,
#     current_user: User = Depends(get_current_user),
# ):
#     print(current_user.id)

#     return {
#         "message": "AI Response"
#     }

@router.post("/register")
def register(
    request: RegisterRequest,
    db: Session = Depends(get_db)
):

    existing = db.query(User).filter(
        User.email == request.email
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    user = create_user(
        db,
        request.name,
        request.email,
        request.password
    )

    return {
        "message": "User created successfully",
        "user_id": user.id
    }

@router.post("/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):
    user = authenticate(
        db,
        form_data.username,   # username contains the email
        form_data.password
    )

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    token = create_access_token({"sub": str(user.id)})

    return {
        "access_token": token,
        "token_type": "bearer"
    }
