// src/pages/PostDetail.jsx
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <Link to="/">Go back to all posts</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/" style={{ display: "block", marginBottom: "1rem" }}>
        ← Back to all posts
      </Link>
      <PostCard post={post} />
    </div>
  );
}