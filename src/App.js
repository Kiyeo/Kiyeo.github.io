import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
  return (
    <Router>
      <header className="header">
        <div className="logo-container">
          <Logo />
          <span className="personal-title">Software Developer</span>
        </div>
        <Menu />
        <NavBar pages={pages} />
      </header>
      <div className="page-body">
        <Switch>
          <Route path={pages.home} component={HomePage} exact />
          <Route path={pages.about} component={AboutPages} />
          <Route path={pages.articlesList} component={ArticleListPage} />
          <Route path={pages.article} component={ArticlePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
