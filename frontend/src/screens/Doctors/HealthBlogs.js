import React from 'react';
import './HealthBlogs.css';  // Make sure to link the CSS file

function HealthBlogs() {
  const blogs = [
    { title: "Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", date: "01/01/2024" },
    { title: "Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", date: "01/01/2024" },
    { title: "Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", date: "01/01/2024" },
    { title: "Title 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", date: "01/01/2024" },
    { title: "Title 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", date: "01/01/2024" },
    { title: "Title 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", date: "01/01/2024" },
    { title: "Title 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", date: "01/01/2024" },
    { title: "Title 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", date: "01/01/2024" }
  ];

  return (
    <div className="health-blogs-container">
      <h1>My Health Blogs</h1>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <p><strong>Date - {blog.date}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthBlogs;