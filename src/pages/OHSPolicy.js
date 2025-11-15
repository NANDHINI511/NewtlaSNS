import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHeartbeat,
  FaShieldAlt,
  FaBalanceScale,
  FaUsers,
  FaExclamationTriangle,
  FaClipboardCheck,
} from "react-icons/fa";

const OHSPolicy = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9", padding: "50px 0" }}>
      <Container>
        {/* Title Section */}
        <Row className="text-center mb-5">
          <Col>
            <h2 style={{ color: "#024D87", fontWeight: "bold" }}>
              Occupational Health & Safety Policy
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              The health and safety of everyone who works for our company is of
              paramount importance. We strive each year to improve safety
              performance with the ultimate goal of{" "}
              <strong>zero accidents</strong>. Our commitment ensures safe and
              healthful working conditions across all projects.
            </p>
          </Col>
        </Row>

        {/* Objectives Section */}
        <Row className="g-4">
          <Col md={6} lg={4}>
            <Card
              className="h-100 shadow-sm border-0"
              style={{ backgroundColor: "#e8f4fa" }} // light blue
            >
              <Card.Body className="text-center">
                <FaHeartbeat size={40} color="#024D87" className="mb-3" />
                <Card.Title className="fw-bold text-dark">
                  Health & Safety Management
                </Card.Title>
                <Card.Text className="text-dark">
                  Develop, implement and maintain an effective occupational
                  health & safety management system across all activities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card
              className="h-100 shadow-sm border-0"
              style={{ backgroundColor: "#f1f9ec" }} // light green
            >
              <Card.Body className="text-center">
                <FaShieldAlt size={40} color="#024D87" className="mb-3" />
                <Card.Title className="fw-bold text-dark">Compliance</Card.Title>
                <Card.Text className="text-dark">
                  Adhere to statutory OH&S requirements, industry codes,
                  standards, and corporate safety guidelines without compromise.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card
              className="h-100 shadow-sm border-0"
              style={{ backgroundColor: "#fff7e6" }} // light orange
            >
              <Card.Body className="text-center">
                <FaBalanceScale size={40} color="#024D87" className="mb-3" />
                <Card.Title className="fw-bold text-dark">
                  Risk & Opportunity
                </Card.Title>
                <Card.Text className="text-dark">
                  Conduct thorough risk & opportunity assessments to proactively
                  minimize hazards and ensure safe practices.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card
              className="h-100 shadow-sm border-0"
              style={{ backgroundColor: "#f3f0fa" }} // light purple
            >
              <Card.Body className="text-center">
                <FaUsers size={40} color="#024D87" className="mb-3" />
                <Card.Title className="fw-bold text-dark">
                  Positive Safety Culture
                </Card.Title>
                <Card.Text className="text-dark">
                  Foster a strong OH&S culture through communication, training,
                  and awareness on mental health & wellbeing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card
              className="h-100 shadow-sm border-0"
              style={{ backgroundColor: "#fceeee" }} // light red
            >
              <Card.Body className="text-center">
                <FaExclamationTriangle
                  size={40}
                  color="#024D87"
                  className="mb-3"
                />
                <Card.Title className="fw-bold text-dark">
                  Incident Prevention
                </Card.Title>
                <Card.Text className="text-dark">
                  Commit to preventing accidents, injuries, and illnesses while
                  protecting property and the environment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card
              className="h-100 shadow-sm border-0"
              style={{ backgroundColor: "#eef8fc" }} // light cyan
            >
              <Card.Body className="text-center">
                <FaClipboardCheck size={40} color="#024D87" className="mb-3" />
                <Card.Title className="fw-bold text-dark">
                  Audits & Reviews
                </Card.Title>
                <Card.Text className="text-dark">
                  Conduct regular audits and reviews to ensure compliance with
                  company policies, standards, and safety regulations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Commitment Section */}
        <Row className="mt-5">
          <Col>
            <Card
              className="shadow-sm border-0 p-4"
              style={{ backgroundColor: "#024D87", color: "white" }}
            >
              <Card.Body>
                <h4 className="text-center mb-4">Commitment from All</h4>
                <ul style={{ lineHeight: "1.8", fontSize: "16px" }}>
                  <li>
                    Employees and partners must take utmost care of their own
                    health, safety, and wellbeing.
                  </li>
                  <li>
                    Collaborate with the company to meet safety obligations and
                    legal requirements.
                  </li>
                  <li>Use equipment responsibly as instructed and trained.</li>
                  <li>
                    Report any shortcomings in health and safety arrangements.
                  </li>
                  <li>
                    Uphold ethical conduct in line with OH&S policies and
                    international standards.
                  </li>
                </ul>
                <div className="text-end mt-4" style={{ fontWeight: "bold" }}>
                  MANAGEMENT /-
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OHSPolicy;
