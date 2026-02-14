import React, { useState } from "react";

export default function SkillSyncFrontend() {
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState([]);
  const [inputSkill, setInputSkill] = useState("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);

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
    console.log(err);
    setLoading(false);
    alert("Backend not running");
  }
};


  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#0f172a,#020617)",
        margin: 0
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "35px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          color: "white"
        }}
      >
        <h1 style={{ textAlign: "center" }}>SkillSync AI</h1>

        {/* ROLE INPUT */}
        <div style={{ marginTop: 20 }}>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Target Role"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background: "rgba(255,255,255,0.1)",
              color: "white"
            }}
          />
        </div>

        {/* SKILLS INPUT */}
        <div style={{ marginTop: 20 }}>
          <input
            value={inputSkill}
            onChange={(e) => setInputSkill(e.target.value)}
            placeholder="Add Skill"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              background: "rgba(255,255,255,0.1)",
              color: "white"
            }}
          />

          <button
            onClick={addSkill}
            style={{
              marginTop: 10,
              padding: "10px",
              width: "100%",
              borderRadius: "10px",
              border: "none",
              background: "#6366f1",
              color: "white",
              cursor: "pointer"
            }}
          >
            Add Skill
          </button>
        </div>

        {/* SKILL CHIPS */}
        <div style={{ marginTop: 15 }}>
          {skills.map((s, i) => (
            <span
              key={i}
              style={{
                margin: 5,
                padding: "6px 12px",
                background: "#6366f1",
                borderRadius: 20,
                display: "inline-block"
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* GENERATE BUTTON */}
        <button
          onClick={generateRoadmap}
          style={{
            marginTop: 25,
            padding: "14px",
            width: "100%",
            borderRadius: "12px",
            border: "none",
            background: "#22c55e",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Generate Roadmap
        </button>

        {/* LOADING */}
        {loading && (
          <p style={{ marginTop: 10 }}>Analyzing skills...</p>
        )}

        {/* RESULT */}
        {generated && !loading && (
          <div style={{ marginTop: 20 }}>
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
