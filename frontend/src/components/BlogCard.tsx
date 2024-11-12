import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  publishedDate: string;
  title: string;
  content: string;
  id: string | number;
}

export const BlogCard = function ({
  authorName,
  publishedDate,
  title,
  content,
  id,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="mt-3 w-screen max-w-screen-md cursor-pointer">
        {/* Centered each BlogCard */}
        <div className="font-extralight mb-2">
          <Avatar name={authorName} /> {authorName}, {publishedDate}
        </div>
        <div className="text-3xl font-bold mb-2">{title}</div>
        <div className="font-medium text-slate-700">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="font-thin">
          {Math.ceil(content.length / 100)} minutes
        </div>
        <div className="bg-slate-300 h-0.5 w-full mt-5"></div>
      </div>
    </Link>
  );
};

interface AvatarProps {
  name: string;
}

export function Avatar({ name }: AvatarProps) {
  return (
    <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
