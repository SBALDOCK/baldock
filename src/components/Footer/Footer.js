import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="contact">
      <div className="social">
        <a href="https://www.linkedin.com/in/stephentbaldock/" className="link">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:stephenbaldock78@gmail.com" className="link">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/SBALDOCK" className="link">
          <i class="fab fa-github-square"></i>
        </a>
      </div>
    </section>
  );
}

export default Footer;
