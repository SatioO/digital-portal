'use client';

import React, { Suspense } from 'react';
import { Blog, BlogListProps } from './blogs.types';

const fetchBlogs = async (offset: number, total: number): Promise<Blog[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?offset=${offset}&total=${total}`
  );
  return await res.json();
};

export default function BlogList(props: BlogListProps) {
  const [blogs, setBlogs] = React.useState<Blog[]>(props.data);

  function onLoadMore() {
    console.log('loading');
    console.log(blogs);
    setBlogs([
      ...blogs,
      {
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        id: 101,
        title: 'test title',
        userId: 1,
      },
    ]);
  }

  return (
    <Suspense fallback={<div>loading....</div>}>
      {blogs.map((blog) => {
        return <div key={blog.id}>{blog.title}</div>;
      })}
      <button onClick={onLoadMore}>Load More</button>
    </Suspense>
  );
}
