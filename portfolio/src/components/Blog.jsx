import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    { title: 'My Journey into Web Development', summary: 'A look back at how I started my career in tech.', link: '#' },
    { title: 'Top 5 React Hooks to Know', summary: 'A quick guide to essential React Hooks.', link: '#' },
  ];

  return (
    <section id="blog" className="blog-section">
      <h2>Blog</h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog; 