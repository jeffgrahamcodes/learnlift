from pydantic import BaseModel

class FeedbackRequest(BaseModel):
    text: str
    grade_level: str = "8th"