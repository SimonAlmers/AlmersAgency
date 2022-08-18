import { useRouter } from "next/router";
import articleList from "data/articles.json";
import HeroBlock from "components/Blocks/HeroBlock";
import { styled } from "@stitches/react";

const StyledArticle = styled("main", {
  "article.content": {
    padding: 48,
    display: "flex",
    justifyContent: "center",
  },
  p: {
    maxWidth: 800,
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
    fontFamily: "serif",
  },
});

const ArticleDetailViewPage = () => {
  const { id } = useRouter().query;
  const article = articleList[`${id}`];

  return (
    <StyledArticle>
      <HeroBlock title={article.title} bgImage={article.coverImage} />
      <article className="content">
        <p>{article.content}</p>
      </article>
    </StyledArticle>
  );
};

export default ArticleDetailViewPage;
