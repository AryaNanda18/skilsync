import React from "react";
import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const data = location.state;

  if (!data) return <p>No Data</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Roadmap Result</h1>

      <h3>Required Skills</h3>
      <ul>
        {data.required_skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h3>Missing Skills</h3>
      <ul>
        {data.missing_skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
