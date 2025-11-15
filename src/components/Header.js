import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/newlog.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

const Header = () => {
  const [showPolicies, setShowPolicies] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <p className="top-text">www.newtlasns.com</p>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" bg="white" sticky="top" className="shadow-sm">
        <Container>
          {/* Logo + Branding */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={logo} alt="Newtla SNS" className="nav-logo" />
            <div className="brand-text ms-2">
              <span className="brand-title">NEWTLA SNS</span><br/>
              <span className="brand-subtitle">GLOBAL PROJECTS CONSULTING</span><br/>
              <span className="brand-small">
                Electrical “A” Grade Contractor
              </span>
            </div>
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="main-navbar" />

          {/* Navigation Links */}
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-center nav-links">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <span className="divider">|</span>

              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <span className="divider">|</span>

              {/* Dropdown - Policies */}
              <NavDropdown
                title="Our Policies"
                id="policies-dropdown"
                className="no-caret"
                show={showPolicies}
                onMouseEnter={() => setShowPolicies(true)}
                onMouseLeave={() => setShowPolicies(false)}
              >
                <NavDropdown.Item as={Link} to="/codeconduct">
                  Business Code of Conduct
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/policy">
                  Quality Policy Statement
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ohspolicy">
                  Occupational Health and Safety
                </NavDropdown.Item>
              </NavDropdown>
              <span className="divider">|</span>

              {/* Dropdown - Services */}
              <NavDropdown
                title="Our Services"
                id="services-dropdown"
                className="no-caret"
                show={showServices}
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <NavDropdown.Item as={Link} to="/electricalinstallation">
                  Electrical Installation Service
                </NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="/testing">
                  Testing, Commissioning & Start-up
                </NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="/feeddetailengineering">
                  FEED & Power System Studies
                </NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="/renewablepower">
                  Renewable Power Projects
                </NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="/Instrumentationservices">
                  Instrumentation Services
                </NavDropdown.Item>
                 <NavDropdown.Item as ={Link} to="/civilservice">
                  Civil Services
                </NavDropdown.Item>
                <NavDropdown.Item as ={Link} to="/projectmanagement">
                  Project Management Consulting
                </NavDropdown.Item>
                <NavDropdown.Item href="#maintenance">
                  Maintenance & Troubleshooting
                </NavDropdown.Item>
                <NavDropdown.Item href="#mechanical">
                  Mechanical Erection
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#civil">Civil Services</NavDropdown.Item> */}
                <NavDropdown.Item href="#mep">MEP Works</NavDropdown.Item>
              </NavDropdown>
              <span className="divider">|</span>

              <Nav.Link href="#projects">Projects</Nav.Link>
              <span className="divider">|</span>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <span className="divider">|</span>
              <Nav.Link href="#careers">Careers</Nav.Link>
              <span className="divider">|</span>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
