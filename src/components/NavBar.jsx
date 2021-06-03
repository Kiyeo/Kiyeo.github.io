import { NavLink, useLocation } from "react-router-dom";

const NavBar = (props) => {
  const { pages } = props;
  //const { pathToRegexp } = require("path-to-regexp");
  //const location = useLocation();
  //const currentURL = location.pathname.split("?")[0];

  /* used to keep Articles nav focus active when browsing different articles */
  //const articleRegex = pathToRegexp(pages.article);
  //const currentArticle = articleRegex.exec(currentURL);

  return (
    <nav className="nav--nav-bar">
      <ul>
        <li>
          <NavLink exact to={pages.home} activeClassName="active">
            Projects
          </NavLink>
        </li>
        {
          //<li>
          //  <NavLink
          //    to={pages.articlesList}
          //    isActive={() => currentURL === pages.articlesList || currentArticle}
          //    activeClassName="active"
          //  >
          //    Articles
          //  </NavLink>
          //</li>
        }
        <li>
          <NavLink to={pages.about} activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
