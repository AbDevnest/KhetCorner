import React from "react";
import "../styles/footer.css";
import "../styles/animation.css";
import useScrollFade from "../hooks/useScrollFade";


function Footer() {
  useScrollFade();
  return (
    <footer className="footer fade-up">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <h3 className="footer-logo">KhetCorner</h3>

            <p className="footer-text">
              KhetCorner is your trusted platform for modern agriculture
              solutions, helping farmers grow smarter with quality products and
              services.
            </p>

            <p className="footer-copy">
              © {new Date().getFullYear()} KhetCorner. All rights reserved.
            </p>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title">Contact</h5>

            <p className="footer-text">📍 Rajasthan, India</p>
            <p className="footer-text">📞 +91 23131 43210</p>
            <p className="footer-text">📧 support@khetcorner.com</p>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-12">
            <h5 className="footer-title">Newsletter</h5>

            <p className="footer-text">
              Get farming tips, updates & offers directly in your inbox.
            </p>

            <div className="newsletter border rounded">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
