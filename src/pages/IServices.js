import React from 'react';
import { FaTachometerAlt, FaWater, FaChartLine, FaFlask, FaGasPump, FaClipboardList, FaRadiationAlt, FaThermometerHalf, FaTools } from 'react-icons/fa';
import { IServicesimages } from "../constant/Constant";
import "./Iservice.css";


const Inservices1 = [
  { label: "Transmitters (PT, DPT, TT, Level, Flow…)", icon: <FaTachometerAlt /> },
  { label: "Flow Meter (Mag, Vortex, Mass…)", icon: <FaWater /> },
  { label: "Level Transmitters (Ultrasonic, Guided Wave, Radar)", icon: <FaChartLine /> },
  { label: "Liquid Analyzer (PH, Conductivity)", icon: <FaFlask /> },
  { label: "Gas Analyzers", icon: <FaGasPump /> },
];

const Inservices2 = [
  { label: "Recorder, Indicator and Controllers", icon: <FaClipboardList /> },
  { label: "Gas detector", icon: <FaRadiationAlt /> },
  { label: "Thermocouple, RTD, Gauges…", icon: <FaThermometerHalf /> },
  { label: "Control valves, All type of industrial MOVS and Valve", icon: <FaTools /> },
];


const IServices = () => {
  return (
    <>
    <div className="heroIservice" style={{ backgroundImage: `url(${IServicesimages[0].img})` }} >
        <div className="heroIservice-overlay">
            <h1 className="animated-heading-iservice">Instrumentation Services</h1>

          {/* <h1>Instrumentation Services</h1> */}
          <p className="animated-para-iservice">We provide a comprehensive range of industrial instrumentation services to ensure optimal performance and reliability of your systems.</p>             
        </div>      
      </div>

{/* ROW 1 */}
<div className="insinfographic-row">
  <div className="insinfographic-col insinfographic-list">
    {Inservices1.map((item, index) => (
      <div key={index} className={`insinfographic-item2 theme-gradient-${index % 3}`}>
        <div className="insinfographic-content">
          <h3>{`0${index + 1}`}</h3>
          <p>{item.label}</p>
        </div>
        <div className="insinfographic-icon">{item.icon}</div>
      </div>
    ))}
  </div>
  <div className="insinfographic-col insinfographic-image">
    <img src={IServicesimages[1].img} alt="Instrumentation Services" />
  </div>
</div>

{/* ROW 2 */}
<div className="insinfographic-row">
  <div className="insinfographic-col insinfographic-image">
    <img src={IServicesimages[2].img} alt="Instrumentation Services" />
  </div>
  <div className="insinfographic-col insinfographic-list">
    {Inservices2.map((item, index) => (
      <div key={index + 5} className={`insinfographic-item1 theme-gradient-${(index + 5) % 3}`}>
        <div className="insinfographic-content">
          <h3>{`0${index + 6}`}</h3>
          <p>{item.label}</p>
        </div>
        <div className="insinfographic-icon">{item.icon}</div>
      </div>
    ))}
  </div>
</div>




    </>
  );
};

export default IServices;
