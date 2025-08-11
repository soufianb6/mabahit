// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f8f9fa", borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ fontSize: "1.25rem", fontWeight: "bold", textDecoration: "none", color: "#007bff" }}>
        My Blog
      </Link>
    </nav>
  );
}