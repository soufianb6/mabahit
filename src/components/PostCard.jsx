export default function PostCard({post}){
  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem", borderRadius: "8px" }}>
      <h2>{post.title}</h2>
      <p><strong>Published on:</strong> {new Date(post.date).toLocaleDateString()}</p>
      <p>{post.content}</p>
    </div>
  )
}