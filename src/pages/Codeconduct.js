// src/components/CodeOfConduct.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  ShieldCheck,
  Users,
  FileCheck,
  Scale,
  Handshake,
  Eye,
  Globe,
  BookOpen,
  AlertTriangle,
} from "lucide-react";

const CodeOfConduct = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <Container>
        {/* Heading */}
        <Row className="justify-content-center mb-4">
          <Col md={10} className="text-center">
            <h2 className="fw-bold mb-3" style={{ color: "#024D87" }}>
              Code of Conduct
            </h2>
            <p className="text-muted fs-5">
              NEWTLA SNS is committed to conducting business with the highest
              standards of integrity, ethics, and professionalism. This Code of
              Conduct serves as a guide for our employees, partners, and
              stakeholders to act responsibly and uphold the values that define
              our organization.
            </p>
          </Col>
        </Row>

        {/* Cards Section */}
        <Row className="g-4">
          {/* Integrity & Ethics */}
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <ShieldCheck size={40} color="#024D87" className="mb-3" />
                <h5 className="fw-bold"  style={{ color: "#024D87" }}>Integrity & Ethics</h5>
                <p className="text-muted">
                  Always act with honesty, transparency, and fairness. Uphold
                  ethical principles in all business dealings and maintain trust
                  with clients, employees, and partners.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Respect & Fair Treatment */}
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Users size={40} color="#024D87" className="mb-3" />
                <h5 className="fw-bold" style={{ color: "#024D87" }}>Respect & Fair Treatment</h5>
                <p className="text-muted">
                  Treat everyone with dignity and respect. Embrace diversity and
                  inclusion while ensuring a safe and supportive workplace for
                  all employees.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Compliance with Laws */}
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <FileCheck size={40} color="#024D87" className="mb-3" />
                <h5 className="fw-bold" style={{ color: "#024D87" }}>Compliance with Laws</h5>
                <p className="text-muted">
                  Adhere strictly to all applicable laws, regulations, and
                  industry standards. Conduct business with full accountability
                  and transparency.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Conflict of Interest */}
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Scale size={40} color="#024D87" className="mb-3" />
                <h5 className="fw-bold" style={{ color: "#024D87" }}>Conflict of Interest</h5>
                <p className="text-muted">
                  Avoid situations where personal interests may conflict with
                  organizational responsibilities. Decisions must prioritize the
                  company’s best interest.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Confidentiality */}
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Eye size={40} color="#024D87" className="mb-3" />
                <h5 className="fw-bold" style={{ color: "#024D87" }}>Confidentiality</h5>
                <p className="text-muted">
                  Safeguard sensitive company information, intellectual
                  property, and client data. Protect against unauthorized access
                  or disclosure.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Fair Business Practices */}
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Handshake size={40} color="#024D87" className="mb-3" />
                <h5 className="fw-bold" style={{ color: "#024D87" }}>Fair Business Practices</h5>
                <p className="text-muted">
                  Compete fairly in the market. Avoid bribery, corruption, or
                  unfair trade practices to ensure credibility and long-term
                  success.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Social & Environmental Responsibility */}
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Globe size={40} color="#024D87" className="mb-3" />
                <h5 className="fw-bold" style={{ color: "#024D87" }}>Social & Environmental Responsibility</h5>
                <p className="text-muted">
                  Commit to sustainability and contribute positively to society.
                  Reduce environmental impact and support community development.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Accountability */}
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <BookOpen size={40} color="#024D87" className="mb-3" />
                <h5 className="fw-bold" style={{ color: "#024D87" }}>Accountability</h5>
                <p className="text-muted">
                  Every employee is responsible for their actions. Maintain high
                  standards of work and own responsibility for decisions and
                  outcomes.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Reporting Misconduct */}
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <AlertTriangle size={40} color="#024D87" className="mb-3" />
                <h5 className="fw-bold" style={{ color: "#024D87" }}>Reporting Misconduct</h5>
                <p className="text-muted">
                  Encourage employees to report unethical behavior or misconduct
                  without fear of retaliation, ensuring a culture of integrity.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Footer Note */}
        <Row className="justify-content-center mt-5">
          <Col md={10} className="text-center">
            <p className="fw-bold text-muted">
              Together, we uphold our values and commitment to ethical business
              practices, ensuring the success and sustainability of NEWTLA SNS.
            </p>
            <p className="text-end fw-bold mt-4" style={{ color: "#024D87" }}>
              – MANAGEMENT
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CodeOfConduct;
