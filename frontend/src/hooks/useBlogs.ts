import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";

export interface Blog {
  content: string;
  title: string;
  id: string;
  author: {
    name: string;
  };
}
export const useBlog = (id: number) => {
  // Expect a number directly
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    async function fetchBlog() {
      setLoading(true);
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setBlog(res.data.blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchBlog();
  }, [id]);

  return { blog, loading };
};
export const useBlogs = () => {
  const [loading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(function () {
    async function blogs() {
      setIsLoading(true);
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setIsLoading(false);
      setBlogs(res.data.blog);
    }
    blogs();
  }, []);
  return { blogs, loading };
};
