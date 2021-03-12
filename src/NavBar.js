import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Music</Link>
      </li>
      <Link to="/articles-list">Articles</Link>
      <li></li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
