import { Link } from 'react-router-dom';

function Blog() {
  const posts = [
    { id: 1, title: 'Getting Started with React Router', excerpt: 'Learn the basics of routing in React...' },
    { id: 2, title: 'Advanced React Patterns', excerpt: 'Explore advanced patterns for React development...' },
    { id: 3, title: 'State Management in React', excerpt: 'Understanding different state management solutions...' }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog Posts</h1>
      <p>Explore our collection of articles about React and web development.</p>
      
      <div style={{ marginTop: '30px' }}>
        {posts.map(post => (
          <div 
            key={post.id}
            style={{
              padding: '20px',
              marginBottom: '15px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h2 style={{ marginTop: 0 }}>{post.title}</h2>
            <p style={{ color: '#666' }}>{post.excerpt}</p>
            <Link 
              to={`/blog/${post.id}`}
              style={{
                textDecoration: 'none',
                color: '#007bff',
                fontWeight: 'bold'
              }}
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
