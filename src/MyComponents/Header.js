import React from 'react';
import { Link } from "react-router-dom";

export default function Header(props) {
  const navStyle = {
    backgroundColor: "pink",
    color: "purple", // Updated text color
    padding: "10px",
    textAlign: "center",
    fontSize: "24px",
    border:"2px solid purple",
  };

  const linkStyle = {
    color: "purple", // Purple color for all links
    textDecoration: "underline",
  };

  const titleStyle = {
    color: "purple", // Set the color of the title
    fontSize: "26px", // Adjust the font size
    fontWeight: "bold", // Make the title bold
    textTransform: "uppercase", // Optional: Make title uppercase
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
    
   };

  return (
    <div>
      <nav className="navbar navbar-expand" style={navStyle}>
        <Link className="navbar-brand" to="/" style={titleStyle}>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/" style={linkStyle}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about" style={linkStyle}>
                About <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
