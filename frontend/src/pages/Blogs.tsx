import { Appbar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks/useBlogs";

export const Blogs = function () {
  const { blogs, loading } = useBlogs();
  if (loading)
    return (
      <div className="flex items-center flex-col">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  console.log(blogs);
  return (
    <div>
      <Appbar />
      <div className="flex justify-center w-32 mx-auto">
        {" "}
        {/* Centered container */}
        <div className="flex justify-center flex-col items-center">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="2nd feb"
              key={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
