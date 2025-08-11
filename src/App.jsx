import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import CategoryPosts from "./pages/CategoryPosts";


export default function App() {
  return(
    <>
      <Navbar />
      <div style={{ padding: "0 20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/categories" element={<CategoryPage />} />

          <Route path="/category/:id" element={<CategoryPosts/>} />
        </Routes>
      </div>
    </>
  )
}