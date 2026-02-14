<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# SkillSync AI 🎯

## Basic Details


### Team Members
- Arya Nanda S M
### Hosted Project Link
(http://localhost:5173/)
http://127.0.0.1:3000/

### Project Description
Project Description

SkillSync is an intelligent skill gap analyzer that compares a user's existing skills with required skills for a target job role and generates a learning roadmap.

It helps students and job seekers understand what skills they need to acquire for specific career paths.

### The Problem statement
Many students don't know:

What skills are required for a job role

Which skills they are missing

How to plan learning roadmap

There is no simple tool that compares current skills vs required industry skills.
### The Solution
SkillSync solves this by:

Taking target job role as input

Taking user's current skills

Comparing with industry skill database

Showing missing skills instantly

Generating roadmap guidance
---

## Technical Details

### Technologies/Components Used

Technologies Used
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
---

## Features

Skill Gap Analysis
✅ Roadmap Generation
✅ Role-Based Skill Mapping
✅ Modern UI (Glassmorphism Design)
✅ Fast API Backend
✅ Local Database (No external API needed)
---

## Implementation

### For Software:

#### Installation
```bash
cd skillsync-backend
pip install fastapi uvicorn pydantic

```

#### Run
```bash
uvicorn main:app --host 127.0.0.1 --port 3000
http://127.0.0.1:3000/docs

```

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)
<img width="974" height="700" alt="image" src="https://github.com/user-attachments/assets/11fd6c27-c8bd-41c4-a09a-ddeb3a4c60cc" />


#### Diagrams

**System Architecture:**

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

**Application Workflow:**
User enters target job role
2️⃣ User enters current skills
3️⃣ Frontend sends request to backend
4️⃣ Backend checks skill database
5️⃣ Missing skills returned
6️⃣ Roadmap displayed
---


---

## Additional Documentation
(http://127.0.0.1:3000)

#### API Documentation

**Base URL:** `{
 "message": "SkillSync Backend Running"
}


##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---





## AI Tools Used (Optional - For Transparency Bonus)

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



*

## License

MIT License



---

Made with ❤️ at TinkerHub
