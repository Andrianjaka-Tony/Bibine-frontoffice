import { FunctionComponent } from "react";
import BlogCard, { Blog } from "../card/BlogCard";
import "./BlogList.scss";

interface Props {
  blogs: Blog[];
}

const BlogList: FunctionComponent<Props> = ({ blogs = [] }: Props) => {
  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <BlogCard {...blog} key={index} />
      ))}
    </div>
  );
};

export default BlogList;
