function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to React Query Demo</h1>
      <p style={{ color: '#666', fontSize: '18px' }}>
        This application demonstrates React Query's powerful caching and data fetching capabilities.
      </p>
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h3>Features Demonstrated:</h3>
        <ul style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
          <li>Automatic data fetching with useQuery hook</li>
          <li>Loading and error state management</li>
          <li>Data caching (navigate to Posts and back to see instant load)</li>
          <li>Manual refetch on demand</li>
          <li>Background refetching</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
