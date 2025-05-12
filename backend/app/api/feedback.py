from fastapi import APIRouter
from pydantic import BaseModel
from openai import OpenAI
import os

# Load API key from environment
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise RuntimeError("OPENAI_API_KEY not set in environment!")

client = OpenAI(api_key=api_key)

router = APIRouter()

class FeedbackRequest(BaseModel):
    text: str
    grade_level: str = "8th"

@router.post("/feedback")
def get_feedback(data: FeedbackRequest):
    prompt = (
        f"You are a kind and supportive writing coach helping a {data.grade_level} grade student. "
        f"Give constructive but encouraging feedback on this writing:\n\n{data.text}"
    )

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )

    feedback = response.choices[0].message.content
    return {"feedback": feedback}