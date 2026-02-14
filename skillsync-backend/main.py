# from fastapi.middleware.cors import CORSMiddleware
# from fastapi import FastAPI
# from pydantic import BaseModel

# app = FastAPI()
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


# ROLE_SKILLS = {
#     "frontend developer": ["html","css","javascript","react","git","api"],
#     "backend developer": ["python","fastapi","database","docker","api"]
# }

# class SkillRequest(BaseModel):
#     role: str
#     skills: list[str]

# @app.get("/")
# def home():
#     return {"message": "SkillSync Backend Running"}

# @app.post("/analyze")
# def analyze_skills(data: SkillRequest):
#     role = data.role.lower()
#     user_skills = [s.lower() for s in data.skills]

#     required = ROLE_SKILLS.get(role, [])
#     missing = [s for s in required if s not in user_skills]

#     return {
#         "required_skills": required,
#         "missing_skills": missing
#     }


from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel

import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()


client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

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
    "backend developer": ["python","fastapi","database","docker","api"]
}

class SkillRequest(BaseModel):
    role: str
    skills: list[str]

@app.get("/")
def home():
    return {"message": "SkillSync Backend Running"}

# @app.post("/ai-analyze")
# async def ai_analyze(data: SkillRequest):

#     role = data.role
#     user_skills = data.skills

#     prompt = f"""
#     You are a career skills expert.

#     For the job role: {role}

#     Give ONLY a Python list of required technical skills.

#     Example format:
#     ["Python","SQL","Excel"]

#     Do not explain anything.
#     """

#     response = client.chat.completions.create(
#         model="gpt-4.1-mini",
#         messages=[{"role": "user", "content": prompt}]
#     )

#     ai_skills_text = response.choices[0].message.content

#     try:
#         required_skills = eval(ai_skills_text)
#     except:
#         required_skills = []

#     missing = [s for s in required_skills if s.lower() not in [u.lower() for u in user_skills]]

#     return {
#         "required_skills": required_skills,
#         "missing_skills": missing
#     }
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
