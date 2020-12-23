import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="contact">
      <div className="social">
        <a
          href="https://www.linkedin.com/in/stephentbaldock/"
          className="link"
          target="_blank"
        >
          <i class="fab fa-linkedin fa-lg"></i>
        </a>
        <a
          href="mailto:stephenbaldock78@gmail.com"
          className="link"
          target="_blank"
        >
          <i class="fas fa-envelope fa-lg"></i>
        </a>
        <a href="https://github.com/SBALDOCK" className="link" target="_blank">
          <i class="fab fa-github-square fa-lg"></i>
        </a>
      </div>
    </section>
  );
}

export default Footer;
