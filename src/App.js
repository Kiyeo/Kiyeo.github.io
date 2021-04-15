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
  return (
    <Router>
      <header className="header">
        <div className="logo-container">
          <Logo />
          <span className="personal-title">Software Developer</span>
        </div>
        <Menu />
        <NavBar />
      </header>
      <div className="page-body">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPages} />
          <Route path="/articles-list" component={ArticleListPage} />
          <Route path="/article/:name" component={ArticlePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
