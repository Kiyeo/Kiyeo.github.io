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
import Footer from "./components/Footer";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const App: React.FC = () => {
  const pages: Pages = {
    home: "/",
    about: "/about",
    articlesList: "/articles-list",
    article: "/article/:name",
  };

  const urlHandles: UrlHandles = {
    github: "https://github.com/kiyeo",
    linkedin: "https://linkedin.com/in/leokeo",
    twitter: "https://twitter.com/leojkeo",
  };

  const location = useLocation();

  return (
    <>
      <div className="content-grid">
        <header className="header">
          <div className="logo-container">
            <Logo />
            <span className="logo-title">Software Developer</span>
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
                <div className="page-body">
                  <Switch location={location}>
                    <Route path={pages.home} component={HomePage} exact />
                    <Route path={pages.about} component={AboutPages} />
                    {
                      <Route
                        path={pages.articlesList}
                        component={ArticleListPage}
                      />
                    }
                    <Route path={pages.article} component={ArticlePage} />
                    <Route component={NotFoundPage} />
                  </Switch>
                </div>
              </CSSTransition>
            </SwitchTransition>
          }
        </main>
        <footer className="footer">
          <Footer urlHandles={urlHandles} />
        </footer>
      </div>
    </>
  );
};

export default App;
