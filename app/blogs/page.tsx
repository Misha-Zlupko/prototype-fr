import ImpressionSection from "../sections/article_page/ImpressionSection";
import { ArticleSection } from "../sections/article_page/ArticleSection";
import s from "./page.module.scss";
import Link from "next/link";

const Blogs = () => {
  return (
    <div>
      <Link href="/blogs/1">1</Link>
      <h1>Blogs</h1>
    </div>
  );
};

export default Blogs;
