import { useQuery } from '@tanstack/react-query';

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  // Use React Query's useQuery hook to fetch and cache data
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 60000, // Data is considered fresh for 60 seconds
    cacheTime: 300000, // Cache data for 5 minutes
  });

  // Loading state
  if (isLoading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Posts</h2>
        <p>Loading posts...</p>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Posts</h2>
        <p style={{ color: 'red' }}>Error loading posts: {error.message}</p>
        <button
          onClick={() => refetch()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h2>Posts from JSONPlaceholder API</h2>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isFetching ? 'not-allowed' : 'pointer',
            opacity: isFetching ? 0.6 : 1,
          }}
        >
          {isFetching ? 'Refetching...' : 'Refetch Posts'}
        </button>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
          Navigate away and come back to see cached data load instantly!
        </p>
      </div>

      <div style={{ display: 'grid', gap: '15px' }}>
        {data?.slice(0, 10).map((post) => (
          <div
            key={post.id}
            style={{
              border: '1px solid #ddd',
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3 style={{ marginTop: 0, color: '#333' }}>
              {post.id}. {post.title}
            </h3>
            <p style={{ color: '#666', margin: 0 }}>{post.body}</p>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', marginTop: '20px', color: '#888' }}>
        Showing 10 of {data?.length} posts (Data cached for better performance)
      </p>
    </div>
  );
}

export default PostsComponent;
