import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";

const Header = () => {
  const { selectedColor } = useContext(ThemeContext);
  return (
    <nav className="navbar" style={{ backgroundColor: selectedColor }}>
      <div className="navbar-logo">MyWebsite</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Book Gallery</Link>
        </li>
        <li>
          <Link to="/todo">ToDo</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
