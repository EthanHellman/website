import React from 'react';
import './Blog.css'; // Make sure to create a CSS file for styles

const posts = [
  { id: 1, title: 'Machine Learning Trends', content: '<p>Latest trends in ML...</p>' },
  { id: 2, title: 'Deep Learning Applications', content: '<p>How deep learning is changing the world...</p>' },
  // Add more posts here
];

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <h2>Blog</h2>
        <div className="blog-posts">
          {posts.map((post) => (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
