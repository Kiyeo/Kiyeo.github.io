import "./App.css";
import "./index.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import HomePage from "./pages/HomePage";
import AboutPages from "./pages/AboutPages";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import Logo from "./components/Logo.jsx";
import NavBar from "./components/NavBar.jsx";
import Menu from "./components/Menu.jsx";

function App() {
  const pages = {
    home: "/",
    about: "/about",
    articlesList: "/articles-list",
    article: "/article/:name",
  };

  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: "translate3d(-25%,0,0)",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)",
    },
    leave: { opacity: 0, transform: "translate3d(25%,0,0)" },
  });

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Logo />
          <span className="personal-title">Software Developer</span>
        </div>
        <Menu />
        <NavBar pages={pages} />
      </header>
      {transitions((style, item) => (
        <animated.div style={style}>
          <div className="page-body">
            <Switch location={item}>
              <Route path={pages.home} component={HomePage} exact />
              <Route path={pages.about} component={AboutPages} />
              <Route path={pages.articlesList} component={ArticleListPage} />
              <Route path={pages.article} component={ArticlePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </animated.div>
      ))}
    </>
  );
}

export default App;
