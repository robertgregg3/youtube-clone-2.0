import React from "react";
import { Link } from "react-router-dom";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__section">
        <span>About</span>
        <span>Press</span>
        <span>Copyright</span>
        <span>Contact Us</span>
        <span>Creators</span>
        <span>Advertise</span>
        <span>Developers</span>
      </div>
      <div className="footer__section">
        <Link to="/terms-of-service">
          <span>Terms </span>
        </Link>
        <Link to="/privacy">
          <span>Privacy</span>
        </Link>
        <span>Policy & Safety</span>
        <span>How YouTube Works</span>
        <span>Test new features</span>
      </div>
      <div className="footer__section">
        <p>© 2021 Google Clone</p>
      </div>
    </div>
  );
};

export default Footer;
