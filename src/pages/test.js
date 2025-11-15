import React, { useState } from "react";
import { FaBolt, FaCog, FaPlug, FaTools, FaSearch, FaGlobe, FaMagnet, FaLink, FaTachometerAlt, FaSyncAlt, FaMicrochip, FaTint, FaOilCan } from "react-icons/fa";

const scopeItems = [
  { text: "Transformer testing of all capacity", icon: <FaPlug />, color: "card-1" },
  { text: "Electrical Motor Testing (AC/DC)", icon: <FaCog />, color: "card-2" },
  { text: "Switch Gear Testing (Indoor/Outdoor), Breaker, Bus bar, Isolator etc.", icon: <FaTools />, color: "card-3" },
  { text: "Current Transformer / Potential Transformer test of HV/LV", icon: <FaSearch />, color: "card-4" },
  { text: "Grounding Pit Testing & Maintenance", icon: <FaGlobe />, color: "card-5" },
  { text: "HV/LV Feeder Protective Relay Testing", icon: <FaMagnet />, color: "card-6" },
  { text: "Lightning Arrestor / Surge Arrestor Testing", icon: <FaBolt />, color: "card-7" },
  { text: "BUS BAR Joints, Cable Joints", icon: <FaLink />, color: "card-8" },
  { text: "High Voltage (AC/DC) Test of all Equipment.", icon: <FaTachometerAlt />, color: "card-1" },
  { text: "HV Testing", icon: <FaSyncAlt />, color: "card-2" },
  { text: "Breaker Timing", icon: <FaTachometerAlt />, color: "card-3" },
  { text: "Primary Injection testing", icon: <FaMagnet />, color: "card-4" },
  { text: "Secondary Injection testing", icon: <FaMagnet />, color: "card-5" },
  { text: "Relay Calibration & testing including Microprocessor based Relays", icon: <FaMicrochip />, color: "card-6" },
  { text: "Tan Delta testing", icon: <FaTint />, color: "card-7" },
  { text: "Transformer Oil DGA Test", icon: <FaOilCan />, color: "card-8" }
];

const splitIndex = Math.ceil(scopeItems.length / 2);

const leftScope = scopeItems.slice(0, splitIndex);
const rightScope = scopeItems.slice(splitIndex);

const Test = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="scope-section">
      <h2 className="section-heading mb-4">Scope of Equipment Testing Services</h2>
      <div className="scope-timeline-wrapper">
        <div className="scope-col">
          {leftScope.map((item, idx) => (
            <div
              className={`service-card ${item.color} ${activeIdx === idx ? "active" : ""}`}
              key={idx}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              <div className="service-card-icon">{item.icon}</div>
              <div>
                <h4 className="service-card-title">{item.text}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="scope-timeline">
          <div className="scope-line"></div>
          {activeIdx !== null && (
            <div
              className="scope-pointer"
              style={{
                top: `calc(${(activeIdx / (leftScope.length - 1)) * 100}% - 12px)`
              }}
            ></div>
          )}
        </div>
        <div className="scope-col">
          {rightScope.map((item, idx) => (
            <div
              className={`service-card ${item.color} ${activeIdx === idx + leftScope.length ? "active" : ""}`}
              key={idx + leftScope.length}
              onMouseEnter={() => setActiveIdx(idx + leftScope.length)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              <div className="service-card-icon">{item.icon}</div>
              <div>
                <h4 className="service-card-title">{item.text}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="section-text" style={{ fontStyle: "italic", fontWeight: 500, color: "#024D87" }}>
        All testing is carried out as per SOP prepared & validated based on IS & other relevant Standards and follows best industry practice.
      </p>
    </section>
  );
};

export default Test;