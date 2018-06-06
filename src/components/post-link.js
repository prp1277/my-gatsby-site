import react from "react";
import Link from "gatsby-link";

const PostLink = ({ post }) => (
    <div>
        <Link to={post.frontmatter.title}>
        {post.frontmatter.title}{" "}({post.frontmatter.date})
        </Link>
        </div>
);

export default PostLink