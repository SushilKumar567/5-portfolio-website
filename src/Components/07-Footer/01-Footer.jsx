import React from "react";
import "./02-Footer.css";
import "./03-Media.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p id="sml-text">
        © {new Date().getFullYear()} Sushil Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
