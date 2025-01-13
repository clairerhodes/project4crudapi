// BlogPostCard.jsx
import React from 'react';

const BlogPostCard = ({ post }) => {
  return (
    <div className="blog-post-card">
      <h3>{post.subjectLine}</h3>
      <p>Posted by {post.username} on {post.createdAt}</p>
    </div>
  );
}

export default BlogPostCard;