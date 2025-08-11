// src/pages/CategoryPosts.jsx
import { useParams } from "react-router-dom";
import { posts, categories } from "../data/posts";

export default function CategoryPosts() {
  const { id } = useParams(); // ← Get :id from URL
  const categoryId = parseInt(id);

  // Find the category
  const category = categories.find(cat => cat.id === categoryId);

  // Filter posts that belong to this category
  // ⚠️ Right now, posts don't have a "category" field — let's fix that!
  const postsInCategory = posts.filter(post => post.categoryId === categoryId);

  if (!category) {
    return <h1>Category not found</h1>;
  }

  if (postsInCategory.length === 0) {
    return (
      <div>
        <h1>{category.name}</h1>
        <p>No posts in this category yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Category: {category.name}</h1>
      <p><em>{category.description}</em></p>

      {postsInCategory.map(post => (
        <div key={post.id} style={{ margin: "1rem 0", border: "1px solid #ccc", padding: "1rem" }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}