import "./App.css";
import "./index.css";
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPages from "./pages/AboutPages";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import Logo from "./components/Logo.jsx";
import NavBar from "./components/NavBar.jsx";
import Menu from "./components/Menu.jsx";
//import { useTransition, animated } from "react-spring";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function App() {
  const pages = {
    home: "/",
    about: "/about",
    articlesList: "/articles-list",
    article: "/article/:name",
  };

  const location = useLocation();
  //const transitions = useTransition(location, {
  //  from: {
  //    position: "absolute",
  //    opacity: 0,
  //    transform: "translate3d(-25%,0,0)",
  //  },
  //  enter: {
  //    opacity: 1,
  //    transform: "translate3d(0%,0,0)",
  //  },
  //  leave: { opacity: 0, transform: "translate3d(25%,0,0)" },
  //  //trail: 500,
  //  //config: {
  //  //  duration: 500,
  //  //},
  //  //order: ["leave", "enter", "update"],
  //});

  return (
    <>
      <div className="content-grid">
        <header className="header">
          <div className="logo-container">
            <Logo />
            <span className="personal-title">Software Developer</span>
          </div>
          <Menu />
          <NavBar pages={pages} />
        </header>
        <main className="main">
          {
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={location.key}
                timeout={{ enter: 400, exit: 400 }}
                classNames="fade"
              >
                {
                  //transitions((style, item) => (
                  //  <animated.div style={style}>
                }
                <div className="page-body">
                  <Switch location={location}>
                    <Route path={pages.home} component={HomePage} exact />
                    <Route path={pages.about} component={AboutPages} />
                    <Route
                      path={pages.articlesList}
                      component={ArticleListPage}
                    />
                    <Route path={pages.article} component={ArticlePage} />
                    <Route component={NotFoundPage} />
                  </Switch>
                </div>
                {
                  //  </animated.div>
                  //))
                }
              </CSSTransition>
            </SwitchTransition>
          }
        </main>
        <footer className="footer">footer</footer>
      </div>
    </>
  );
}

export default App;
