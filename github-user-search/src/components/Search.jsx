import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      setLoading(true);
      setError(false);
      setUserData(null);

      try {
        const data = await fetchUserData(username.trim());
        setUserData(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', maxWidth: '500px', margin: '0 auto' }}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            style={{
              flex: 1,
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#0366d6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </div>
      </form>

      {/* Loading state */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '20px', fontSize: '18px' }}>
          Loading...
        </div>
      )}

      {/* Error state */}
      {error && (
        <div style={{ textAlign: 'center', padding: '20px', fontSize: '18px', color: '#d73a49' }}>
          Looks like we cant find the user
        </div>
      )}

      {/* Success state - Display user data */}
      {userData && !loading && !error && (
        <div style={{
          border: '1px solid #e1e4e8',
          borderRadius: '8px',
          padding: '20px',
          maxWidth: '600px',
          margin: '20px auto',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img
              src={userData.avatar_url}
              alt={userData.login}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%'
              }}
            />
            <div style={{ flex: 1 }}>
              <h2 style={{ margin: '0 0 5px 0' }}>{userData.name || userData.login}</h2>
              <p style={{ margin: '0', color: '#586069' }}>@{userData.login}</p>
              {userData.bio && <p style={{ margin: '10px 0 0 0' }}>{userData.bio}</p>}
            </div>
          </div>
          
          <div style={{ marginTop: '15px', display: 'flex', gap: '20px', fontSize: '14px' }}>
            {userData.location && (
              <span>📍 {userData.location}</span>
            )}
            {userData.public_repos !== undefined && (
              <span>📦 {userData.public_repos} repos</span>
            )}
            {userData.followers !== undefined && (
              <span>👥 {userData.followers} followers</span>
            )}
          </div>
          
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '15px',
              padding: '8px 16px',
              backgroundColor: '#0366d6',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            View Profile on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
