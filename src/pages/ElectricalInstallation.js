// src/pages/ElectricalInstallation.js
import React from "react";
import {
  FaBolt,
  FaCogs,
  FaPowerOff,
  FaIndustry,
  FaBatteryFull,
  FaPlug,
  FaProjectDiagram,
  FaLightbulb,
  FaNetworkWired,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import "./electicalinstallation.css";
import bannerImg from "../images/Electrical_Contracting_banner.jpg"; // use your uploaded bg image
import OurProcess from "../components/OurProcess";

const services1 = [
  { icon: <FaBolt />, title: "Switchgears", desc: "All types and wide range of electrical power panels." },
  { icon: <FaCogs />, title: "Control & Protection Panels", desc: "Custom panels ensuring safe operation." },
  { icon: <FaPowerOff />, title: "Generators", desc: "Installation & integration of industrial generators." },
  { icon: <FaIndustry />, title: "Transformers", desc: "Reliable transformer erection and commissioning." },
  { icon: <FaTools />, title: "Motors & Pumps", desc: "Installation of compressors, pumps, motors and fans." },
  { icon: <FaBatteryFull />, title: "UPS & Battery System", desc: "Continuous power solutions with UPS integration." },
  { icon: <FaPlug />, title: "Cables", desc: "HV/MV/LV power cables, FO, control & instrumentation." },
  { icon: <FaProjectDiagram />, title: "Substations", desc: "GIS & outdoor substation equipment erection." },
  { icon: <FaLightbulb />, title: "Lighting Systems", desc: "DB/PDB, indoor & outdoor lighting solutions." },
  { icon: <FaNetworkWired />, title: "Bus Ducts & Cable Trays", desc: "Efficient routing and power distribution." },
  { icon: <FaShieldAlt />, title: "Safety Systems", desc: "Earthing, lightning & cathodic protection." },
];

const timeline1 = [
  { step: "Design & Planning", desc: "Tailored solutions with premium quality standards." },
  { step: "Procurement", desc: "Sourcing high-quality electrical components." },
  { step: "Installation", desc: "Executed by skilled engineers with innovative techniques." },
  { step: "Testing & Commissioning", desc: "Ensuring reliability and compliance with standards." },
  { step: "Handover & Support", desc: "Complete documentation and ongoing assistance." },
];

const ElectricalInstallation = () => {
  return (
    <div className="electrical-page">
{/* Hero Section */}
<div
  className="hero1"
  style={{ "--hero-bg": `url(${bannerImg})` }}
>
  <div className="hero1-overlay">
    <h1 className="animated-heading-hero1">Electrical Installation Services</h1>
    <p className="animated-para-EIS">
      Delivering complete EPCC solutions with safety, reliability, and precision.
    </p>
  </div>
</div>


      {/* Services Grid */}
      <section className="services1">
        <h2>Our Expertise</h2>
        <div className="services1-grid">
          {services1.map((s, i) => (
            <div className="service1-card" key={i}>
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <OurProcess/>

      {/* CTA */}
      <section className="cta">
        <h2>Need Reliable Electrical Installations?</h2>
        <p>Contact us today for customized, high-quality solutions.</p>
        <button className="cta-btn">Get in Touch</button>
      </section>
    </div>
  );
};

export default ElectricalInstallation;
