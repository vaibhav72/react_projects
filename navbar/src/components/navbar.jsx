import React, { useState } from "react";

const Navbar = () => {
  const [navLinkOpen, navLinkToggle] = useState(false);

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };

  const renderClasses = () => {
    return navLinkOpen ? "nav-links" : "nav-links hide";
  };
  return (
    <nav>
      <a href="" className="logo">
        Brand Logo
      </a>
      <button
        onClick={handleNavLinksToggle}
        className="hamburger-toggle"
      ></button>
      <i className="fas fa-bars fa-lg"></i>
      <div className={renderClasses()}>
        <a href="" className="link">
          Home
        </a>
        <a href="" className="link">
          Blog
        </a>
        <a href="" className="link">
          About Us
        </a>
        <a href="" className="link">
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
