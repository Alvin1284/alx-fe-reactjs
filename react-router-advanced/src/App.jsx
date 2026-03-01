import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh' }}>
        {/* Navigation Bar */}
        <nav style={{
          backgroundColor: '#282c34',
          padding: '15px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
              Home
            </Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
              About
            </Link>
            <Link to="/blog" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
              Blog
            </Link>
            <Link to="/profile" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
              Profile
            </Link>
          </div>

          <div>
            {isAuthenticated ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: '#61dafb' }}>✓ Authenticated</span>
                <button
                  onClick={handleLogout}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Login
              </button>
            )}
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Dynamic Route for Blog Posts */}
          <Route path="/blog/:id" element={<BlogPost />} />
          
          {/* Protected Route with Nested Routes */}
          <Route 
            path="/profile/*" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Catch-all route for 404 */}
          <Route path="*" element={
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h1>404 - Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
              <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
                Go Home
              </Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App
