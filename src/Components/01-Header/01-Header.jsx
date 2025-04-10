import React, { useState } from "react";
import "./02-Header.css";
import "./03-Media.css";
import { Logo } from "../00-Comps/Comps";

const Header = () => {
  const menuItems = ["HOME", "SKILLS", "PROJECTS", "ABOUT", "CONTACT"];

  const [showMenu, setShowMenu] = useState(true);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <Logo />
      <nav className={showMenu ? "nav-bar" : "menu-mobile"}>
        <ul className="menu-items">
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      <i className="fa-solid fa-bars" onClick={handleClick}></i>
    </header>
  );
};

export default Header;
