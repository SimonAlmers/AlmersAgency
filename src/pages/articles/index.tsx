import ArticleCard from "components/ArticleCard";
import articleList from "data/articles.json";
const ArticleListViewPage = () => {
  return (
    <div>
      <h1>Article List View</h1>
      {Object.values(articleList).map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleListViewPage;
