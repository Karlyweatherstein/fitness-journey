import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav">
        <h1>
          <Link to="/">Katie Bevington</Link>
        </h1>
        <ul>
          <li>
            <Link to="/links">Links</Link>
          </li>
          <li>
            <Link to="/weight-loss">Weight Loss</Link>
          </li>
          <li>
            <Link to="/work-with-me">Work with me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div></div>
    </nav>
  );
}

export default Nav;
