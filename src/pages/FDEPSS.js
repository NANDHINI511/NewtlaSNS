import React from "react";
import "./FDEPSS.css";
import { FDEPSSimages } from "../constant/Constant";
import { FaCogs, FaProjectDiagram, FaDraftingCompass, FaTools, FaChartPie, FaBolt, FaSyncAlt, FaWaveSquare, FaExclamationTriangle } from "react-icons/fa";

const FDEPSS = () => {
  return (
    <>
{/* Hero Section with title over image */}
<div
  className="heroFeed"
  style={{ "--hero-bg": `url(${FDEPSSimages[0].img})` }}
>
  <div className="heroFeed-overlay">
    <h1 className="animated-heading-heroFeed">FEED, Detail Engineering and Power System Studies</h1>
    <p>
      We have a dedicated team for start-up commissioning of power plants,
      substations, and more.
    </p>
  </div>
</div>

    <div className="listfeed-infographic">
      <h2>SOW & Project Requirements</h2>
      <div className="timelinefeed">

        <div className="timelinefeed-column left">
          <div className="timelinefeed-item color1">
            <FaCogs className="icon" />
            <p>FEED, Base Design & Detailed Engineering</p>
          </div>
          <div className="timelinefeed-item color2">
            <FaProjectDiagram className="icon" />
            <p>Secondary Engineering for Substations</p>
          </div>
          <div className="timelinefeed-item color3">
            <FaTools className="icon" />
            <p>AutoCAD, ELCAD, ETAP</p>
          </div>
          <div className="timelinefeed-item color4">
            <FaDraftingCompass className="icon" />
            <p>Equipment Sizing and Selection</p>
          </div>
          <div className="timelinefeed-item color5">
            <FaDraftingCompass className="icon" />
            <p>Drafting for all 2D drawings</p>
          </div>
          <div className="timelinefeed-item color6">
            <FaDraftingCompass className="icon" />
            <p>Modification, Red Marked & As-Built Drawings</p>
          </div>
        </div>

        <div className="timelinefeed-column right">
          <div className="timelinefeed-item color7">
            <FaChartPie className="icon" />
            <p>Load Flow & Power Factor Correction Study</p>
          </div>
          <div className="timelinefeed-item color8">
            <FaBolt className="icon" />
            <p>Short Circuit Study</p>
          </div>
          <div className="timelinefeed-item color9">
            <FaCogs className="icon" />
            <p>Relays Coordination and Settings Study</p>
          </div>
          <div className="timelinefeed-item color10">
            <FaSyncAlt className="icon" />
            <p>Motor Starting Study</p>
          </div>
          <div className="timelinefeed-item color11">
            <FaProjectDiagram className="icon" />
            <p>Transient Stability Study</p>
          </div>
          <div className="timelinefeed-item color12">
            <FaWaveSquare className="icon" />
            <p>Harmonics Measurements</p>
          </div>
          <div className="timelinefeed-item color13">
            <FaExclamationTriangle className="icon" />
            <p>Failure Investigation Analysis</p>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default FDEPSS;
