import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import PostsComponent from './components/PostsComponent';
import HomePage from './components/HomePage';

const queryClient = new QueryClient();

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ minHeight: '100vh' }}>
        {/* Navigation */}
        <nav style={{
          backgroundColor: '#282c34',
          padding: '15px 30px',
          display: 'flex',
          gap: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <button
            onClick={() => setCurrentPage('home')}
            style={{
              padding: '10px 20px',
              backgroundColor: currentPage === 'home' ? '#61dafb' : '#4a5568',
              color: currentPage === 'home' ? '#282c34' : 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('posts')}
            style={{
              padding: '10px 20px',
              backgroundColor: currentPage === 'posts' ? '#61dafb' : '#4a5568',
              color: currentPage === 'posts' ? '#282c34' : 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            Posts
          </button>
        </nav>

        {/* Page Content */}
        <main>
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'posts' && <PostsComponent />}
        </main>
      </div>
      
      {/* React Query Devtools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App
