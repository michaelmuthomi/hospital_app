from fastapi import APIRouter
from routes.home import router as home_router
from routes.login import router as login_router
from routes.signup import router as signup_router

router = APIRouter()

router.include_router(home_router, tags=["home"])
router.include_router(login_router,  tags=["login"])
router.include_router(signup_router,  tags=["signup"])