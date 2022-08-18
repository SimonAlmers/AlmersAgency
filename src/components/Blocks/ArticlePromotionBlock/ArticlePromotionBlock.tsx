import { styled } from "@stitches/react";
import ArticleCard from "components/ArticleCard";
import articleList from "data/articles.json";

const StyledBlock = styled("section", {
  marginTop: -83,
  backgroundImage: "linear-gradient(-45deg, #2c0133, #150061)",
  padding: 48,
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  h1: {
    fontSize: "8rem",
  },
});

const ArticlePromotionBlock = ({ bgImage }: { bgImage?: string }) => {
  return (
    <StyledBlock>
      <h1>Recent Articles</h1>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          columnGap: 32,
        }}
      >
        <ArticleCard article={articleList["54398"]} />
        <ArticleCard
          style={{ marginTop: 100 }}
          article={articleList["87927"]}
        />
      </div>
    </StyledBlock>
  );
};

export default ArticlePromotionBlock;
