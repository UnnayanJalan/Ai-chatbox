from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from fastapi.security import OAuth2PasswordRequestForm

from app.database.database import get_db

from app.core.dependencies import get_current_user

from app.core.security import create_access_token

from app.core.config import settings

from app.models.user import User

from app.schemas.auth import (
    RegisterRequest,
    RegisterResponse,
    TokenResponse,
    UserResponse,
)

from app.services.auth_service import (
    create_user,
    authenticate,
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.get(
    "/me",
    response_model=UserResponse,
)
def me(
    current_user: User = Depends(get_current_user),
):
    return current_user


@router.post(
    "/register",
    response_model=RegisterResponse,
)
def register(
    request: RegisterRequest,
    db: Session = Depends(get_db),
):

    existing = db.query(User).filter(
        User.email == request.email
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already exists",
        )

    user = create_user(
        db,
        request.name,
        request.email,
        request.password,
    )

    return {
        "message": "User registered successfully",
        "user": user,
    }


@router.post(
    "/login",
    response_model=TokenResponse,
)
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):

    user = authenticate(
        db,
        form_data.username,
        form_data.password,
    )

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password",
        )

    token = create_access_token(
        {
            "sub": str(user.id),
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
        "expires_in": settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        "user": user,
    }