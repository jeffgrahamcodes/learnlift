import os
from dotenv import load_dotenv
from fastapi import FastAPI
from app.api import feedback

# ✅ Load .env before anything else
load_dotenv()

# ✅ Optional: check if the key is loaded
if not os.getenv("OPENAI_API_KEY"):
    raise RuntimeError("OPENAI_API_KEY not found in environment!")

# ✅ FastAPI app setup
app = FastAPI()
app.include_router(feedback.router, prefix="/api")