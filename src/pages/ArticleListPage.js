import ArticlesList from "../components/ArticlesList.jsx";
import articleContent from "./article-content";

const ArticleListPage = () => (
  <>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
  </>
);

export default ArticleListPage;
