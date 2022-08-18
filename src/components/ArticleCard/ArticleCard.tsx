import { styled } from "@stitches/react";
import Link from "next/link";
import { CSSProperties } from "react";

const StyledArticleCard = styled("article", {
  backgroundColor: "white",
  borderRadius: 12,
  color: "black",
  width: 300,
  overflow: "hidden",
  h1: {
    fontSize: "1rem !important",
  },
  img: {
    width: "100%",
    objectFit: "cover",
  },
  ".content": {
    padding: 24,
  },
});

const ArticleCard = ({
  article,
  style,
  className,
}: {
  className?: string;
  style?: CSSProperties;
  article: { title: string; coverImage?: string; id: number };
}) => {
  return (
    <StyledArticleCard className={className} style={style}>
      <img src={article.coverImage} alt="" />
      <div className="content">
        <Link href={`/articles/${article.id}`}>
          <a>
            <h1>{article.title}</h1>
          </a>
        </Link>
      </div>
    </StyledArticleCard>
  );
};

export default ArticleCard;
