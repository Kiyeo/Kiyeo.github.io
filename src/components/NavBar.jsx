import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathToRegexp } = require("path-to-regexp");
  const location = useLocation();
  const currentURL = location.pathname.split("?")[0];

  /* used to keep Articles nav focus active when browsing different articles */
  const articleRegex = pathToRegexp("/article/:name");
  const currentArticle = articleRegex.exec(currentURL);

  return (
    <nav className="top-nav">
      <ul>
        <li>
          <Link to="/" className={currentURL === "/" ? "active" : ""}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/articles-list"
            className={
              currentURL === "/articles-list" || currentArticle ? "active" : ""
            }
          >
            Articles
          </Link>
        </li>
        <li>
          <Link to="/about" className={currentURL === "/about" ? "active" : ""}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
