import React from "react";
import { Link } from "react-router-dom";
import Icon from "./../App"


const Navbar = () => {
  return (
    <header >
    <Icon />
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
        </Link>
        <ul className="nav-link">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Singlechampion">SingleChampion</Link>
          </li>
        </ul>
        <h2>Caracter</h2>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
