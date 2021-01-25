import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-contacts">
          <div className="footer-wrapper call-us">
            <h3>Call Us</h3>
            <a href="tel:+975-2-324987">+975-2-324987</a>
            <a href="tel:+975-2-341089">+975-2-341089</a>
          </div>
          <div className="footer-wrapper email-us">
            <h3>Mail Us</h3>
            <a href="mailto:idealtravelcreations@gmail.com">
              idealtravelcreations@gmail.com
            </a>
          </div>
          <div className="footer-wrapper address">
            <h3>Address</h3>
            <p>Babesa-Thimphu Expressway,</p>
            <p>Olakha,</p>
            <p>Opposite to Central Plaza,</p>
            <p>Block No. 3, Plot No. 48,</p>
            <p>Namsang Building, Flat No 102,</p>
            <p>Post Box No: 1931</p>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="footer-end">
          <div className="footer-socials">
            <a href="#" />
            <a href="#" />
          </div>
          <p className="footer-copyright">
            <i className="copyright" />
            Copyright 2021, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
