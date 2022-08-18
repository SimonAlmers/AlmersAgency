import { styled } from "@stitches/react";
import ArticleCard from "components/ArticleCard";
import articleList from "data/articles.json";

const StyledBlock = styled("section", {
  marginTop: -83,
  backgroundImage: "linear-gradient(-45deg, #2c0133, #150061)",
  padding: 48,
  minHeight: "70vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: 48,
  h1: {
    fontSize: "2rem",
  },
  ".component": {
    backgroundColor: "white",
    borderRadius: 24,
    width: 350,
    height: 200,
  },
  ".info": {
    "p, h1": {
      margin: 0,
    },
    maxWidth: 500,
    display: "flex",
    flexDirection: "column",
    rowGap: 32,
  },
});

const ComponentDemoBlock = ({
  order = "normal",
}: {
  order?: "normal" | "reversed";
}) => {
  return (
    <StyledBlock>
      <div
        style={{ order: order === "reversed" ? 1 : 0 }}
        className="component"
      />
      <div className="info">
        <h1>Component Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          quisquam ipsa obcaecati optio quo architecto dolor velit eligendi
          alias unde!
        </p>
        <button>Button</button>
      </div>
    </StyledBlock>
  );
};

export default ComponentDemoBlock;
