from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
from ..supabase_client import supabase

router = APIRouter()

@router.post("/signup")
async def signup():
    try:
        response = supabase.auth.sign_up(
            {"email": "michael@gmail.com", "password": "michael"}
        )
        if response.get("error"):
            raise HTTPException(status_code=400, detail=response["error"]["message"])
        return {"message": "User signed up successfully", "data": response["data"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))