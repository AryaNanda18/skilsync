from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ROLE_SKILLS = {
    "frontend developer": ["html","css","javascript","react","git","api"],
    "backend developer": ["python","fastapi","database","docker","api"],
    "data analyst": ["python","sql","excel","power bi","statistics"]
}

class SkillRequest(BaseModel):
    role: str
    skills: list[str]

@app.get("/")
def home():
    return {"message": "SkillSync Backend Running"}

@app.post("/ai-analyze")
def ai_analyze(data: SkillRequest):
    role = data.role.lower()
    user_skills = [s.lower() for s in data.skills]

    required = ROLE_SKILLS.get(role, [])
    missing = [s for s in required if s not in user_skills]

    return {
        "required_skills": required,
        "missing_skills": missing
    }
