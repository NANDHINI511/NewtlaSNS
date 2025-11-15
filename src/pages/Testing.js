
import { FaCheckCircle } from "react-icons/fa";
import { testingimages } from "../constant/Constant";
import "./testing.css";
import { FaBolt, FaCog, FaPlug, FaTools, FaSearch, FaGlobe, FaMagnet, FaLink, FaTachometerAlt, FaSyncAlt, FaMicrochip, FaTint, FaOilCan } from "react-icons/fa";
import React, { useState } from "react";


const leftColumn = [
  { text: "Transformer testing of all capacity", icon: <FaPlug /> },
  { text: "Electrical Motor Testing (AC/DC)", icon: <FaCog /> },
  { text: "Switch Gear Testing (Indoor/Outdoor), Breaker, Bus bar, Isolator etc.", icon: <FaTools /> },
  { text: "Current Transformer / Potential Transformer test of HV/LV", icon: <FaSearch /> },
  { text: "Grounding Pit Testing & Maintenance", icon: <FaGlobe /> },
  { text: "HV/LV Feeder Protective Relay Testing", icon: <FaMagnet /> },
  { text: "Lightning Arrestor / Surge Arrestor Testing", icon: <FaBolt /> },
  { text: "BUS BAR Joints, Cable Joints", icon: <FaLink /> }
];

const rightColumn = [
  { text: "High Voltage (AC/DC) Test of all Equipment.", icon: <FaTachometerAlt /> },
  { text: "HV Testing", icon: <FaSyncAlt /> },
  { text: "Breaker Timing", icon: <FaTachometerAlt /> },
  { text: "Primary Injection testing", icon: <FaMagnet /> },
  { text: "Secondary Injection testing", icon: <FaMagnet /> },
  { text: "Relay Calibration & testing including Microprocessor based Relays", icon: <FaMicrochip /> },
  { text: "Tan Delta testing", icon: <FaTint /> },
  { text: "Transformer Oil DGA Test", icon: <FaOilCan /> }
];

const colors = [
  "color-1", "color-2", "color-3", "color-4", "color-5", "color-6", "color-7", "color-8"
];
const services = [
  "Power Plants, Substations Equipment",
  "Switchgear",
  "Power Transformers etc",
  "MCC",
  "Power Cables",
  "Fiber optic cables",
  "Relay Settings and Testing",
  "Relays Calibration and Repair",
  "Generator Testing",
  "Protection Testing",
  "Control Panel Testing",
  "SCADA Integration",
];

const Testing = () => {
      const [showOtherServices, setShowOtherServices] = useState(false);
  return (
    <div>
{/* Hero Section with title over image */}
<div
  className="heroTest1"
  style={{ "--hero-bg": `url(${testingimages[0].img})` }}
>
  <div className="heroTest1-overlay">
    <h1 className="animated-heading-heroTest1">Testing, Commissioning & Start-up</h1>
    <p>
      We have a dedicated team for start-up commissioning of power plants,
      substations, and more.
    </p>
  </div>
</div>

      <section>
<div className=" about-section ms-3">
  <p className="about-text">
   “We have a skilled and dedicated team of engineering managers, lead equipment testing engineers, 
   lead relay testing and configuring engineers, and testing technicians, all with 
   extensive field experience in the start-up and commissioning of power plants and related systems.”
  </p>

  <div className="service-list">
    <div className="service-item">Power Plants</div>
    <div className="service-item">Substations Equipment</div>

    <div className="service-item">Switch Gear</div>
    <div className="service-item">Power Transformers </div>
    <div className="service-item">MCC</div>
    <div className="service-item">Power Cables</div>
    <div className="service-item">Fiber Optic colsables</div>
    <div className="service-item">Relay Settings and Testing</div>
    <div className="service-item">Relays Calibration and Repair</div>
  </div>
</div>
      </section>
      <section>
<div className="service-row">
  <div className="service-col image-col">
    <img src={testingimages[1].img} alt="Relay Testing" />
  </div>
  <div className="service-col text-col">
   <p>
    We specialize in <span className="highlight">programming</span>, <span className="highlight">testing</span>, and <span className="highlight">commissioning</span> of relays for all
    makes and applications. Our team is equipped with advanced test kits such
    as <span className="highlight">Omicron</span>, <span className="highlight">Doble</span>, and <span className="highlight">Megger</span>, enabling precise and reliable relay testing.
    In addition, we undertake routine <span className="highlight">maintenance</span> and <span className="highlight">calibration</span> of both
    <span className="highlight">Numerical</span> and <span className="highlight">Electromechanical Relays</span> to ensure optimal performance and
    system reliability.
  </p>
  </div>
</div>

<div className="service-row">

<div className="service-col text-col">
  <p>
    Our expertise extends to <span className="highlight">Substation Erection</span>, <span className="highlight">Testing</span>, and <span className="highlight">Commissioning</span>
    services across all voltage levels, including <span className="highlight">LV</span>, <span className="highlight">MV</span>, <span className="highlight">HV</span>, and <span className="highlight">EHV</span>.
    We have hands-on experience with both <span className="highlight">AIS</span> and <span className="highlight">GIS</span> substations and utilize our own
    advanced <span className="highlight">testing equipment</span> to carry out critical assessments efficiently,
    without external dependency.<br/> Furthermore, we provide complete support for
    integrating <span className="highlight">relays</span> with existing <span className="highlight">SCADA systems</span> or new <span className="highlight">SCADA installations</span>,
    ensuring seamless operation and control.
  </p>
</div>
  <div className="service-col image-col">
    <img src={testingimages[2].img} alt="Substation Services" />
  </div>
</div>
      </section>
        <div className="ms-3 mb-5">
           <h3 className="relay-heading">We are able to test the following relays:</h3>
<div className="relay-list">
  <div className="relay-item"><FaCheckCircle className="relay-check" />Line Distance Relay</div>
  <div className="relay-item"><FaCheckCircle className="relay-check" />Line Differential Relay</div>
  <div className="relay-item"><FaCheckCircle className="relay-check" />Transformer Differential Relay</div>
  <div className="relay-item"><FaCheckCircle className="relay-check" />Motor/Generator Protection Relay</div>
  <div className="relay-item"><FaCheckCircle className="relay-check" />Directional Relay</div>
  <div className="relay-item"><FaCheckCircle className="relay-check" />REF Relay</div>
  <div className="relay-item"><FaCheckCircle className="relay-check" />Transformer/Motor/Generator Relay</div>
  <div className="relay-item"><FaCheckCircle className="relay-check" />Bus bar Protection Relay</div>
  <div className="relay-item"><FaCheckCircle className="relay-check" />Feeder Protection Relay</div>
</div>
</div>

<section className="equipment-section">
  <div className="ms-3 mb-5">
    <h2 className="section-heading mb-4">Equipment and Relay Testing</h2>
 <p className="section-text">
      We conduct various types of testing for electrical equipment commonly used in industries. In addition to testing, we also provide servicing as required by our customers.
    </p>


<div className="timeline-infographic two-cols">
    <div className="timeline-col">
      {leftColumn.map((item, idx) => (
        <div className={`timeline-item left ${colors[idx % colors.length]}`} key={idx}>
          <div className="timeline-icon">{item.icon}</div>
          <div className="timeline-content">
            <h4>{item.text}</h4>
          </div>
        </div>
      ))}
    </div>
    <div className="timeline-col">
      {rightColumn.map((item, idx) => (
        <div className={`timeline-item right ${colors[idx % colors.length]}`} key={idx}>
          <div className="timeline-icon">{item.icon}</div>
          <div className="timeline-content">
            <h4>{item.text}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
  <div>
      <p className="section-text" style={{ fontStyle: "italic", fontWeight: 500,fontSize:"18", color: "#024D87" }}>
      All testing is carried out as per SOP prepared & validated based on IS & other relevant Standards and follows best industry practice.
    </p>
  </div>
<br/>

 <div className="image-grid-row">
    <div className="img-col">
      {/* Add your first image here */}
    <img src={testingimages[3].img} alt="Substation Services" />

      {/* <img src={yourImage1} alt="Description 1" /> */}
    </div>
    <div className="img-col">
      {/* Add your second image here */}
    <img src={testingimages[4].img} alt="Substation Services" />

      {/* <img src={yourImage2} alt="Description 2" /> */}
    </div>
  </div>
  </div>
</section>


      <section className="other-services-toggle-section">
        <button
          className="other-services-btn"
          onClick={() => setShowOtherServices((prev) => !prev)}
        >
          {showOtherServices ? "Hide Other Services" : "Show Other Services"}
        </button>
{showOtherServices && (
  <div className="other-services-list-row">
    <div className="service-card card-1">
      <div className="service-card-icon"><FaOilCan /></div>
      <div>
        <h4 className="service-card-title">Transformer Oil Filtration</h4>
        <p className="service-card-desc">Including Heat Run of Transformer, where required</p>
      </div>
    </div>
    <div className="service-card card-2">
      <div className="service-card-icon"><FaTools /></div>
      <div>
        <h4 className="service-card-title">Servicing of HV/LV Breaker</h4>
        <p className="service-card-desc">Professional servicing for high and low voltage breakers</p>
      </div>
    </div>
  </div>
)}
      </section>

    </div>
  );
};

export default Testing;
