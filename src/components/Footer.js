import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/products" className="footer-link">Products</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/careers" className="footer-link">Careers</a></li>
              <li><a href="/media" className="footer-link">Media Room</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Consulting</a></li>
              <li><a href="#" className="footer-link">Project Management</a></li>
              <li><a href="#" className="footer-link">Engineering</a></li>
              <li><a href="#" className="footer-link">Support</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold mb-3">Policies</h6>
            <ul className="list-unstyled">
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-6 col-md-3">
            <h6 className="fw-bold mb-3">Contact</h6>
            <p className="mb-1">
              <i className="fas fa-phone-alt me-2"></i> +91 76394 70002
            </p>
            <p className="mb-1">
              <i className="fas fa-envelope me-2"></i> info@newtlasns.com
            </p>
            <p className="mb-3">
              <i className="fas fa-envelope me-2"></i> senthil@newtlasns.com
            </p>
            <h6 className="fw-bold mb-2">Our Offices</h6>
            <div className="d-flex flex-wrap gap-2">
              <iframe
                title="Operation Office"
                src="https://www.google.com/maps?q=11.0326,77.0379&hl=es;z=14&amp;output=embed"
                width="120"
                height="100"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <iframe
                title="Registered Office"
                src="https://www.google.com/maps?q=12.035086,77.884596&hl=es;z=14&amp;output=embed"
                width="120"
                height="100"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Enquiry Box */}
          <div className="col-12 col-md-3">
            <h6 className="fw-bold mb-3">Enquiry</h6>
            <form>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-2">
                <textarea
                  className="form-control form-control-sm"
                  placeholder="Message"
                  rows="2"
                ></textarea>
              </div>
              <button
  type="submit"
  className="btn"
  style={{
    backgroundColor: "#024D87",
    color: "white",
    border: "none",
  }}
>
  Submit
</button>

            </form>
          </div>
        </div>
      </div>

      {/* Copyright & Social Media */}
      <div
        className="container-fluid text-white py-3 mt-4"
        style={{ backgroundColor: "#024D87" }}
      >
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p
            className="mb-2 mb-md-0 copyright-text"
            style={{ fontSize: "14px", letterSpacing: "0.5px" }}
          >
            © {new Date().getFullYear()} Newtla SNS Global Projects Consulting Pvt Ltd. All Rights Reserved.
          </p>
          <div>
            <a href="#" className="text-white me-3 social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white me-3 social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white me-3 social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* CSS for hover & shine */}
      <style>{`
        .footer-link {
          color: #333;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-link:hover {
          color: #024D87;
        }
        .social-icon {
          transition: transform 0.3s, color 0.3s;
        }
        .social-icon:hover {
          transform: scale(1.2);
          color: #ffdd57;
        }
        .copyright-text {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }
        .copyright-text::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent);
          transition: left 1s;
        }
        .copyright-text:hover::after {
          left: 100%;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
