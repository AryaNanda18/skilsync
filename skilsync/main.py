# 

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
    "frontend developer": [
        "html", "css", "javascript", "react", "git", "api", "tailwind", "responsive design"
    ],
    "backend developer": [
        "python", "fastapi", "database", "docker", "api", "authentication", "sql", "rest"
    ],
    "full stack developer": [
        "html", "css", "javascript", "react", "nodejs", "express", "database", "api", "git"
    ],
    "data scientist": [
        "python", "pandas", "numpy", "machine learning", "statistics", "data visualization", "sql"
    ],
    "machine learning engineer": [
        "python", "tensorflow", "pytorch", "deep learning", "mlops", "data preprocessing", "docker"
    ],
    "mobile app developer": [
        "flutter", "dart", "firebase", "rest api", "ui design", "git", "state management"
    ],
    "devops engineer": [
        "docker", "kubernetes", "ci/cd", "linux", "aws", "monitoring", "shell scripting"
    ],
    "cloud engineer": [
        "aws", "azure", "gcp", "terraform", "docker", "networking", "security"
    ],
    "cyber security analyst": [
        "network security", "ethical hacking", "penetration testing", "linux", "cryptography", "siem"
    ],
    "ui ux designer": [
        "figma", "adobe xd", "wireframing", "prototyping", "user research", "design systems"
    ],
    "game developer": [
        "unity", "c#", "game physics", "3d modeling", "animation", "game design"
    ],
    "blockchain developer": [
        "solidity", "web3", "smart contracts", "ethereum", "cryptography", "nodejs"
    ],
    "ai engineer": [
        "python", "nlp", "deep learning", "llms", "transformers", "data pipelines"
    ],
    "qa engineer": [
        "manual testing", "automation testing", "selenium", "test cases", "api testing"
    ],
    "database administrator": [
        "sql", "postgresql", "mysql", "database tuning", "backup", "data modeling"
    ]
}

class SkillRequest(BaseModel):
    role: str
    skills: list[str]

@app.get("/")
def home():
    return {"message": "SkillSync Backend Running"}

@app.post("/analyze")
def analyze(data: SkillRequest):
    role = data.role.lower()
    user_skills = [s.lower() for s in data.skills]

    required = ROLE_SKILLS.get(role, [])
    missing = [s for s in required if s not in user_skills]

    return {
        "required_skills": required,
        "missing_skills": missing
    }
