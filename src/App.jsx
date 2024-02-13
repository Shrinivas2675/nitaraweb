import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { useState } from "react";
import BlogPost from "./pages/BlogPost";

function App() {
  const [scrollTo, setScrollTo] = useState("");
  return (
    <>
      <BrowserRouter>
        <Header setScrollTo={setScrollTo} scrollTo={scrollTo} />
        <div className="page-content">
          <Routes>
            <Route
              path="/"
              Component={() => (
                <Home scrollTo={scrollTo} setScrollTo={setScrollTo} />
              )}
            />
            <Route path="/blog" Component={Blog} />
            <Route path="/blog/:blogTitle" Component={BlogPost} />
            <Route path="*" Component={Home} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
