// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function InputPage() {
//   const navigate = useNavigate();

//   const [role, setRole] = useState("");
//   const [skills, setSkills] = useState([]);
//   const [inputSkill, setInputSkill] = useState("");

//   const addSkill = () => {
//     if (!inputSkill.trim()) return;
//     setSkills([...skills, inputSkill]);
//     setInputSkill("");
//   };

//   const generateRoadmap = async () => {
//     const res = await fetch("http://127.0.0.1:8000/analyze", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         role: role,
//         skills: skills
//       })
//     });

//     const data = await res.json();

//     navigate("/result", { state: data });
//   };

//   return (
//     <div style={{ padding: 40 }}>
//       <h1>SkillSync AI</h1>

//       <h3>Target Role</h3>
//       <input
//         value={role}
//         onChange={(e) => setRole(e.target.value)}
//       />

//       <h3>Your Skills</h3>
//       <input
//         value={inputSkill}
//         onChange={(e) => setInputSkill(e.target.value)}
//       />
//       <button onClick={addSkill}>Add</button>

//       <div>
//         {skills.map((s, i) => (
//           <span key={i}>{s} </span>
//         ))}
//       </div>

//       <br />
//       <button onClick={generateRoadmap}>
//         Generate Roadmap
//       </button>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function SkillSyncFrontend() {
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState([]);
  const [inputSkill, setInputSkill] = useState("");
  const [generated, setGenerated] = useState(false);
  const [missingSkills, setMissingSkills] = useState([]);
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  const addSkill = () => {
    if (!inputSkill.trim()) return;
    setSkills([...skills, inputSkill]);
    setInputSkill("");
  };

  const generateRoadmap = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          role: role,
          skills: skills
        })
      });

      const data = await res.json();

      setRequiredSkills(data.required_skills || []);
      setMissingSkills(data.missing_skills || []);
      setGenerated(true);
      setLoading(false);

    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Backend error or not running");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#020617)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "30px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(0,0,0,0.4)"
        }}
      >
        {/* TITLE */}
        <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
          SkillSync AI
        </h1>

        <p style={{ opacity: 0.7 }}>
          AI Powered Skill Gap Analyzer
        </p>

        {/* ROLE INPUT */}
        <div style={{ marginTop: 20 }}>
          <h3>Target Role</h3>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Frontend Developer"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              marginTop: "8px",
              background: "rgba(255,255,255,0.08)",
              color: "white"
            }}
          />
        </div>

        {/* SKILL INPUT */}
        <div style={{ marginTop: 20 }}>
          <h3>Your Skills</h3>

          <input
            value={inputSkill}
            onChange={(e) => setInputSkill(e.target.value)}
            placeholder="Add skill"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              marginTop: "8px",
              background: "rgba(255,255,255,0.08)",
              color: "white"
            }}
          />

          <button
            onClick={addSkill}
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              background: "#6366f1",
              color: "white",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Add Skill
          </button>

          {/* SKILL CHIPS */}
          <div style={{ marginTop: 10 }}>
            {skills.map((s, i) => (
              <span
                key={i}
                style={{
                  marginRight: 8,
                  marginBottom: 8,
                  display: "inline-block",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  background: "#6366f1",
                  fontSize: "14px"
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* GENERATE BUTTON */}
        <button
          onClick={generateRoadmap}
          style={{
            padding: "12px 20px",
            borderRadius: "12px",
            border: "none",
            background: "#22c55e",
            color: "white",
            cursor: "pointer",
            marginTop: "20px",
            width: "100%",
            fontWeight: "bold"
          }}
        >
          Generate Roadmap
        </button>

        {/* LOADING */}
        {loading && (
          <p style={{ marginTop: 15 }}>Analyzing skills...</p>
        )}

        {/* RESULT */}
        {generated && !loading && (
          <div
            style={{
              marginTop: 20,
              padding: 20,
              borderRadius: 15,
              background: "rgba(255,255,255,0.05)"
            }}
          >
            <h3>Required Skills</h3>
            <ul>
              {requiredSkills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>

            <h3>Missing Skills</h3>
            <ul>
              {missingSkills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
