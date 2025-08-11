import { posts, categories } from "../data/posts";

import { Link } from "react-router-dom";

export default function Home () {
  return (
    <div>
      <h1>
        Blog Posts
      </h1>
      <nav>
        <ul>
          {
            categories.map((category) => (
              <li key={category.id}>
                <Link to={`/category/${category.id}`}>
                  {category.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      {
        posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        ))
      }
    </div>
  )
}