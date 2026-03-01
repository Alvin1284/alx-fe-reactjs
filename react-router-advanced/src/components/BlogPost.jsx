import { useParams, useNavigate } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulated blog posts data
  const blogPosts = {
    1: {
      title: 'Getting Started with React Router',
      author: 'Jane Smith',
      date: 'March 1, 2026',
      content: 'React Router is a powerful library for handling routing in React applications. It allows you to create single-page applications with navigation without page refreshes.'
    },
    2: {
      title: 'Advanced React Patterns',
      author: 'John Doe',
      date: 'February 28, 2026',
      content: 'Learn about advanced React patterns including render props, higher-order components, and custom hooks to write more maintainable code.'
    },
    3: {
      title: 'State Management in React',
      author: 'Sarah Johnson',
      date: 'February 25, 2026',
      content: 'Explore different state management solutions for React applications, from Context API to Redux and Zustand.'
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/blog')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate('/blog')}
        style={{
          padding: '8px 16px',
          marginBottom: '20px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Back to Blog
      </button>

      <article>
        <h1>{post.title}</h1>
        <div style={{ 
          color: '#666', 
          marginBottom: '20px',
          fontSize: '14px'
        }}>
          <span>By {post.author}</span> | <span>{post.date}</span>
        </div>
        <div style={{ 
          lineHeight: '1.8',
          fontSize: '16px'
        }}>
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  );
}

export default BlogPost;
