// show user profile here with all posts by this user ID
import React from 'react';
import BlogPostCard from './BlogPostCard';

const Profile = ({ user, posts }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {user.isLogged && <button>Edit Profile</button>}

      <h2>All Posts</h2>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-row" onClick={() => console.log("Post clicked, show details")}>
            <BlogPostCard post={post} />
            {user.isLogged && <button>Edit</button>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;