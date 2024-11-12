import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlogs";
import { FullBlog } from "../components/FullBlog";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blog = function () {
  const { id } = useParams();
  const blogId = Number(id);

  const { blog, loading } = useBlog(blogId);

  if (loading) return <BlogSkeleton />;
  if (!blog) return <div>Blog not found.</div>;

  return <FullBlog blog={blog} />;
};
