import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './posts/PostList';

const Dashboard = () => {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 1024 }}>
        <div className="notification is-link" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem' }}>
            <strong>Dashboard</strong>
          </h1>
          <Link to="/posts/new">Create a new post!</Link>
        </div>
        <PostList />
      </div>
    </section>
  );
};

export default Dashboard;
