import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Stephanie Udemezue |{" "}
        <a
          href="https://github.com/Stephy-Crown"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
