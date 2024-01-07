import { FunctionComponent, MouseEventHandler } from "react";
import "./BlogCard.scss";

export interface Blog {
  user: {
    photo: string;
    name: string;
    onClick: MouseEventHandler;
  };
  content: string;
}

const BlogCard: FunctionComponent<Blog> = ({
  user = {
    name: "",
    photo: "",
    onClick: () => {},
  },
  content = "",
}: Blog) => {
  return (
    <div className="blog-card">
      <img
        onClick={user.onClick}
        className="blog-card-photo"
        src={user.photo}
        alt={user.name}
      />
      <div className="blog-card-content">
        <p onClick={user.onClick} className="blog-card-content-user">
          {user.name}
        </p>
        <p className="blog-card-content-text">{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;
