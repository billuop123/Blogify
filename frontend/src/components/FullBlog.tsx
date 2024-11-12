import { Appbar } from "./AppBar";
import { Avatar } from "./BlogCard";

interface Blog {
  title: string;
  content: string;
  author: {
    name: string;
  };
  // Add any other properties expected in the blog object
}

export const FullBlog = function ({ blog }: { blog: Blog | null }) {
  console.log(blog?.author.name);
  if (!blog) return <div>Loading...</div>; // Display loading if blog is undefined

  return (
    <div>
      <Appbar />
      <div className="grid grid-cols-12 px-10 w-full pt-100">
        <div className="grid-cols-8 col-span-8 text-5xl font-semibold">
          {blog.title}
          <div className="text-lg text-slate-500">Posted on 2nd December</div>
          <div className="py-4 text-lg text-slate-800 ">{blog.content}</div>
        </div>
        <div className="grid-cols-4 col-span-4 text-3xl">
          <Avatar name={blog.author.name} /> {blog.author.name}
          <div className="text-lg">
            Random phrase about the author...........
          </div>
        </div>
      </div>
    </div>
  );
};
