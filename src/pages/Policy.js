import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCheckCircle,
  FaUsers,
  FaShieldAlt,
  FaRegClipboard,
  FaLeaf,
} from "react-icons/fa";

const QualityPolicy = () => {
  return (
    <section className="py-5" style={{ background: "#f8f9fa" }}>
      <Container>
        {/* Title */}
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#024D87" }}>
          Quality Policy Statement
        </h2>

{/* Intro */}
<Card 
  className="p-5 mb-4 border-0 shadow-lg text-white"
  style={{
    background: "linear-gradient(135deg, #024D87, #0370b9)",
    borderRadius: "15px"
  }}
>
  <Card.Body>
    <div className="d-flex align-items-center mb-3">
      <i className="bi bi-shield-check fs-3 me-2"></i>
      <Card.Title className="fw-bold fs-4 mb-0">Our Commitment to Quality</Card.Title>
    </div>
    <p className="lh-lg">
      <strong>NEWTLA SNS</strong> is faithful to provide and maintain high
      level of Quality Standards of its products, services and operational
      compliance in improving quality and continual improvement of quality
      performance, conserving resources and adhering to applicable laws and
      regulation, in all its activities as per the NEWTLA SNS management system.
    </p>
    <p className="lh-lg">
      We are committed to be the leading multi-disciplined engineering,
      project management and construction organization delivering professional
      services and solutions to the energy industry and quality rooted within
      the culture of the organization.
    </p>
    <p className="lh-lg mb-0">
      Our quality-focused culture ensures the highest priority is placed on
      efficiency, reliability, safety, and continual improvement across all
      our divisions.
    </p>
  </Card.Body>
</Card>

        {/* Commitments */}
        <Row className="gy-4">
          <Col md={6}>
            <Card
              className="p-3 shadow-sm h-100"
              style={{ backgroundColor: "#eaf1f8", borderLeft: "5px solid #024D87" }}
            >
              <Card.Body className="d-flex align-items-start gap-3">
                <FaCheckCircle size={32} color="#024D87" />
                <div>
                  <Card.Title className="fw-bold text-dark mb-1">
                    Customer Focus
                  </Card.Title>
                  <Card.Text className="text-dark mb-0">
                    Focusing on customer requirements and expectations to deliver
                    the highest quality products and services.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card
              className="p-3 shadow-sm h-100"
              style={{ backgroundColor: "#f1f3f6", borderLeft: "5px solid #024D87" }}
            >
              <Card.Body className="d-flex align-items-start gap-3">
                <FaShieldAlt size={32} color="#024D87" />
                <div>
                  <Card.Title className="fw-bold text-dark mb-1">
                    Compliance
                  </Card.Title>
                  <Card.Text className="text-dark mb-0">
                    Providing products/services that comply with local regulations,
                    international standards, and client requirements.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card
              className="p-3 shadow-sm h-100"
              style={{ backgroundColor: "#f1f3f6", borderLeft: "5px solid #024D87" }}
            >
              <Card.Body className="d-flex align-items-start gap-3">
                <FaUsers size={32} color="#024D87" />
                <div>
                  <Card.Title className="fw-bold text-dark mb-1">
                    Empowering Employees
                  </Card.Title>
                  <Card.Text className="text-dark mb-0">
                    Empowering employees through clarity, direction, training, and
                    a commitment to safety and quality.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card
              className="p-3 shadow-sm h-100"
              style={{ backgroundColor: "#f1f3f6", borderLeft: "5px solid #024D87" }}
            >
              <Card.Body className="d-flex align-items-start gap-3">
                <FaRegClipboard size={32} color="#024D87" />
                <div>
                  <Card.Title className="fw-bold text-dark mb-1">
                    Monitoring & Audits
                  </Card.Title>
                  <Card.Text className="text-dark mb-0">
                    Setting clear objectives, monitoring progress, and implementing
                    audit programmes to ensure continual improvement.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={12}>
            <Card
              className="p-3 shadow-sm h-100"
              style={{ backgroundColor: "#f1f3f6", borderLeft: "5px solid #024D87" }}
            >
              <Card.Body className="d-flex align-items-start gap-3">
                <FaLeaf size={32} color="#024D87" />
                <div>
                  <Card.Title className="fw-bold text-dark mb-1">
                    Sustainability Commitment
                  </Card.Title>
                  <Card.Text className="text-dark mb-0">
                    Maintaining an Integrated Management System to monitor
                    performance and uphold our commitment to clients, stakeholders,
                    and the environment.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Closing */}
        <div className="text-end mt-4">
          <h6 className="fw-bold text-secondary">— MANAGEMENT</h6>
        </div>
      </Container>
    </section>
  );
};

export default QualityPolicy;
