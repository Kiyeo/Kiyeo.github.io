import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPages from "./pages/AboutPages";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import Logo from "./Logo";
import NavBar from "./NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <header id="header">
        <div id="logo">
          <Logo />
        </div>
        <div id="top-nav">
          <NavBar />
        </div>
      </header>
      <div id="page-body">
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
