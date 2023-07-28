import ImpressionSection from "../../sections/article_page/ImpressionSection";
import { ArticleSection } from "../../sections/article_page/ArticleSection";
import s from "./page.module.scss";


const Blog = ({params}: any) => {
  console.log("🚀 ~ file: page.tsx:6 ~ Blog ~ props:", params)
  return (
    <div>
      <h1>Blog: {params.blogId}</h1>
      <ArticleSection />
      <ImpressionSection />
    </div>
  );
};

export default Blog;
