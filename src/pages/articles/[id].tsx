import { useRouter } from "next/router";

const ArticleDetailViewPage = () => {
  const { id } = useRouter().query;
  return (
    <div>
      <h1>Article Detail View | {id}</h1>
    </div>
  );
};

export default ArticleDetailViewPage;
