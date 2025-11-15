import React from "react";
import "./about.css";
import bgImage from "../images/abt.jpg"; // your local copy

const About = () => (
  <div className="about-page">
    {/* Hero Section with chosen background */}
    <section className="about-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <h1>About Us</h1>
        <p>Building a sustainable future with energy solutions</p>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="vision-mission container">
      <h2>Vision & Mission</h2>
      <p>
        We approach our work with clear values and goals—energy expertise delivered with integrity.
      </p>
      <div className="cards">
        <div className="card vision-card">
          <h4>Our Vision</h4>
          <p>
            Every problem is an opportunity for a creative solution. To become the global preferred contractor and innovator in the energy sector.
          </p>
        </div>
        <div className="card mission-card">
          <h4>Our Mission</h4>
          <p>
            To deliver cost-effective, practical solutions with uncompromised quality and a healthy, secure working environment for all.
          </p>
        </div>
      </div>
    </section>

    {/* Policies Section */}
    <section className="policies container">
      <h2>Policies</h2>
      <p>
        Our management system ensures the highest standards in quality, safety, integrity, and reliability across operations.
      </p>
      <p>
        Integrity, ethics, and continual improvement are at the core of everything we do.
      </p>
    </section>
  </div>
);

export default About;
