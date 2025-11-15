import React from 'react';
import { RPPimages } from "../constant/Constant";
import "./rpp.css";
import {
  FaSolarPanel,
  FaIndustry,
  FaCogs,
  FaCheckCircle,
  FaTools,
  FaProjectDiagram
} from "react-icons/fa";

const expertise = [
  {
    id: 43,
    icon: <FaProjectDiagram />,
    title: "Feasibility Study Reports",
    desc: "Comprehensive site analysis and financial viability studies for renewable projects."
  },
  {
    id: 44,
    icon: <FaCogs />,
    title: "FEED, Design & Engineering",
    desc: "Front-end engineering, detailed design, and optimized project layouts."
  },
  {
    id: 45,
    icon: <FaTools />,
    title: "EPCC Services",
    desc: "Turnkey engineering, procurement, construction & commissioning solutions."
  },
  {
    id: 46,
    icon: <FaCheckCircle />,
    title: "Customized PV Mounting Solutions",
    desc: "Robust rooftop and ground-mounted solar mounting systems."
  },
  {
    id: 47,
    icon: <FaIndustry />,
    title: "Fabrication & Galvanization Facilities",
    desc: "High-quality fabrication and galvanization plants for long-lasting durability."
  },
  {
    id: 48,
    icon: <FaSolarPanel />,
    title: "ACDB & DCDB Panels",
    desc: "Panels designed & manufactured as per international standards."
  },
];

const RPP = () => {
  return (
    <>
{/* HERO SECTION */}
<div 
  className="heroRpp" 
  style={{ "--hero-rpp-bg": `url(${RPPimages[0].img})` }}
>
<div className="heroRpp-overlay">
  <h1 className="animated-heading-rpp">Renewable Power Projects</h1>
  <p className="animated-para-rpp">
    Delivering end-to-end solutions in solar, wind, and biogas energy projects with excellence and sustainability.
  </p>
</div>
</div>


      {/* MAIN CONTENT */}
      <div className="rpp-container">
        <h1 className="rpp-title">Renewable Power Projects (RPP)</h1>
        <p className="rpp-intro">
          NEWTLA SNS offers end-to-end services in setting up Renewable based Power Projects
          like Solar PV, Wind, and Biogas power plants. Our solutions cover the full project
          lifecycle, from feasibility to commissioning.
        </p>

        {/* SERVICES GRID */}
        <div className="rpp-grid">
          {RPPimages.slice(1).map((item, index) => (
            <div key={item.id} className={`rpp-card rpp-card-${index}`}>
              <div className="rpp-card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* EXPERTISE INFOGRAPHIC */}
        <h2 className="rpp-subtitle">Our Expertise</h2>
        <div className="rpp-expertise">
          {expertise.map((item) => (
            <div key={item.id} className="expertise-card">
              <div className="expertise-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RPP;
