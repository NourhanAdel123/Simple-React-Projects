import React from "react";
import './navbar.css';

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <span className="navbar-brand">
          Navbar
        </span>
        <span className="badge">
          {props.productsCount}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
