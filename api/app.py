from fastapi import FastAPI
from routes.home import router as home_router
from routes.login import router as login_router
from routes.signup import router as signup_router

app = FastAPI()

# Include routers
app.include_router(home_router)
app.include_router(login_router)
app.include_router(signup_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)