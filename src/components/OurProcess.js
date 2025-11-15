import React from "react";
import "./ourprocess.css"; // custom css

const OurProcess = () => {
  const steps = [
    {
      title: "Planning & Design",
      desc: "Detailed site survey, electrical design, and project planning.",
      icon: "📐",
    },
    {
      title: "Material Procurement",
      desc: "Sourcing high-quality components and equipment.",
      icon: "⚡",
    },
    {
      title: "Installation",
      desc: "Professional installation with safety compliance.",
      icon: "🔧",
    },
    {
      title: "Testing & Commissioning",
      desc: "Inspection, testing, and handover with full documentation.",
      icon: "✅",
    },
  ];

  return (
    <div className="process-section">
      <h2 className="process-title">Our Process</h2>
      <div className="process-steps">
        {steps.map((step, index) => (
          <div className="process-card" key={index}>
            <div className="process-icon">{step.icon}</div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
