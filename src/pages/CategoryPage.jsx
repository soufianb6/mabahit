// src/pages/CategoryPage.jsx
import { Link } from "react-router-dom";



export default function CategoryPage() {
  return (
    <div>
      <h1>Blog Categories</h1>
      <ul>
        {categories.map((category) => (
        <li key={category.id}>
          
          <Link to={`/category/${category.id}`}>
            {category.name}
          </Link>
          <p> {category.description} </p>
        </li>
      ))}
      </ul>
    </div>
  );
}