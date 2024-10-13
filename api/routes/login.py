from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
from supabase_client import supabase 

router = APIRouter()

@router.post("/login")
async def login(request: Request):
    data = await request.json()
    email = data.get('email')
    password = data.get('password')
    
    # Implement your login logic here
    response = supabase.auth.sign_in(email=email, password=password)
    
    if response.get('error'):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    return JSONResponse(content={"message": "Login successful"})