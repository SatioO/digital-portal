import BlogList from '../../components/Blogs/Blogs';
import { Blog } from '../../components/Blogs/blogs.types';

const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await res.json();
};

export default async function Blogs() {
  const blogs = await fetchBlogs();

  return <BlogList data={blogs} />;
}
