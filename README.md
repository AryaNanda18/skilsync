SkillSync AI
🧾 Basic Details

Team Name: SkillSync

👥 Team Members

Arya Nanda — BTech Student

🌐 Hosted Project Link

(If not hosted yet, you can write:)

Currently running locally.
Frontend → http://localhost:5173

Backend → http://127.0.0.1:3000

📌 Project Description

SkillSync is an intelligent skill gap analyzer that compares a user's existing skills with required skills for a target job role and generates a learning roadmap.

It helps students and job seekers understand what skills they need to acquire for specific career paths.

❗ Problem Statement

Many students don't know:

What skills are required for a job role

Which skills they are missing

How to plan learning roadmap

There is no simple tool that compares current skills vs required industry skills.

✅ Solution

SkillSync solves this by:

Taking target job role as input

Taking user's current skills

Comparing with industry skill database

Showing missing skills instantly

Generating roadmap guidance

🛠 Technical Details
💻 Technologies Used
Software

Languages

JavaScript

Python

HTML

CSS

Frameworks

React

FastAPI

Libraries

Pydantic

Fetch API

CORS Middleware

Tools

VS Code

Git

GitHub

Postman (optional)

⭐ Features

✅ Skill Gap Analysis
✅ Roadmap Generation
✅ Role-Based Skill Mapping
✅ Modern UI (Glassmorphism Design)
✅ Fast API Backend
✅ Local Database (No external API needed)

⚙️ Implementation
📥 Installation
Backend Setup
cd skillsync-backend
pip install fastapi uvicorn pydantic

Run Backend
uvicorn main:app --host 127.0.0.1 --port 3000


Backend runs at:

http://127.0.0.1:3000/docs

Frontend Setup

Open new terminal:

cd skillsync-ai
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🖼 Screenshots
<img width="949" height="806" alt="image" src="https://github.com/user-attachments/assets/09e04f9b-d5f0-4c66-be7f-37b8fea3d2c4" />

(Add your screenshots later)
SkillSync AI – Interface Description

This screen is the main interface of the SkillSync AI application, designed to help users analyze skill gaps for specific job roles.

Users can enter a target job role (for example, Frontend Developer) and add their existing skills using the input field and “Add Skill” button. The added skills appear as skill tags below the input area.

Once the user clicks Generate Roadmap, the system analyzes the entered skills against the required skills for that role and generates a roadmap showing required and missing skills.

The interface uses a modern dark glass-style design with gradient background, making it clean, minimal, and user-friendly.
Example:

![Home Screen](img.png)
Skill input and role selection screen

🏗 System Architecture
Flow

React Frontend
⬇
Fetch API Call
⬇
FastAPI Backend
⬇
Skill Database Lookup
⬇
Response → Frontend

🔄 Application Workflow

1️⃣ User enters target job role
2️⃣ User enters current skills
3️⃣ Frontend sends request to backend
4️⃣ Backend checks skill database
5️⃣ Missing skills returned
6️⃣ Roadmap displayed

📡 API Documentation
Base URL
http://127.0.0.1:3000

GET /

Check server status

Response:

{
 "message": "SkillSync Backend Running"
}

POST /ai-analyze
Request
{
 "role": "frontend developer",
 "skills": ["html", "css"]
}

Response
{
 "required_skills": ["html","css","javascript","react","git","api"],
 "missing_skills": ["javascript","react","git","api"]
}

🎥 Demo

(Add later if needed)

🤖 AI Tools Used

Tool Used: ChatGPT

Purpose:

Debugging help

Code structuring

README writing

UI suggestions

Approx AI Code: ~30–40%
Human Work:

Full architecture

Integration

Debugging

Git setup

Deployment setup

👨‍💻 Team Contributions

Arya Nanda:

Frontend Development

Backend Development

API Integration

GitHub Setup

Testing

Documentation

📜 License

MIT License

❤️ Made at TinkerHub Hackathon
⭐ Future Scope

Resume Upload Skill Extraction

Real AI Skill Suggestions

Job Market Integration

Learning Resource Recommendations

Progress Tracking Dashboard
