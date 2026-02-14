# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from database import get_connection

# app = FastAPI()

# # Enable CORS for your frontend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.get("/")
# def home():
#     return {"message": "SkillSync Backend Running"}

# @app.get("/hello")
# def hello():
#     return {"message": "Hello from SkillSync"}

# @app.get("/users")
# def get_users():
#     conn = get_connection()
#     cur = conn.cursor()
#     try:
#         cur.execute("SELECT * FROM users")
#         rows = cur.fetchall()
#         users_list = []
#         for r in rows:
#             users_list.append([r[0], r[1], r[2], str(r[4])])  # id, name, email, created_at
#         return {"users": users_list}
#     finally:
#         cur.close()
#         conn.close()

# @app.post("/add-user")
# def add_user(name: str, email: str, password: str):
#     conn = get_connection()
#     cur = conn.cursor()
#     try:
#         cur.execute(
#             "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)",
#             (name, email, password)
#         )
#         conn.commit()
#         return {"message": "User added successfully"}
#     except Exception as e:
#         conn.rollback()
#         return {"message": f"Failed to add user: {str(e)}"}
#     finally:
#         cur.close()
#         conn.close()

# @app.get("/test-db")
# def test_db():
#     conn = get_connection()
#     cur = conn.cursor()
#     cur.execute("SELECT version()")
#     version = cur.fetchone()
#     cur.close()
#     conn.close()
#     return {"database_version": version}

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

ROLE_SKILLS = {
    "frontend developer": ["html","css","javascript","react","git","api"],
    "backend developer": ["python","fastapi","database","docker","api"]
}

class SkillRequest(BaseModel):
    role: str
    skills: list[str]

@app.post("/analyze")
def analyze_skills(data: SkillRequest):
    role = data.role.lower()
    user_skills = [s.lower() for s in data.skills]

    required = ROLE_SKILLS.get(role, [])

    missing = [s for s in required if s not in user_skills]

    return {
        "required_skills": required,
        "missing_skills": missing
    }
