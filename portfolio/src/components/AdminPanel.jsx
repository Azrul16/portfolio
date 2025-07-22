import React, { useState } from 'react';
import './AdminPanel.css';

const ADMIN_PASSWORD = 'admin123';

const AdminPanel = () => {
  const [section, setSection] = useState('projects');
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (!authed) {
    return (
      <div className="admin-panel">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin} className="admin-login-form">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="admin-error">{error}</p>}
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="admin-nav">
        <button onClick={() => setSection('projects')}>Projects</button>
        <button onClick={() => setSection('blogs')}>Blogs</button>
        <button onClick={() => setSection('reviews')}>Reviews</button>
      </div>
      <div className="admin-content">
        {section === 'projects' && <div>Add/Edit Projects (Coming Soon)</div>}
        {section === 'blogs' && <div>Add/Edit Blogs (Coming Soon)</div>}
        {section === 'reviews' && <div>Add/Edit Reviews (Coming Soon)</div>}
      </div>
    </div>
  );
};

export default AdminPanel; 