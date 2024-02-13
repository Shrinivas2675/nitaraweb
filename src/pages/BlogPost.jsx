import { Container } from "@mui/material";
import BlogTopSection from "../components/Bolg/BlogTopSection";
import BlogDetailAsPerPost from "../components/Bolg/BlogDetailAsPerPost";

const BlogPost = () => {
  return (
    <>
      <div className="blog-section">
        <Container className="container">
          <br />
          <BlogTopSection />
          <BlogDetailAsPerPost />
        </Container>
      </div>
      <br />
    </>
  );
};

export default BlogPost;
