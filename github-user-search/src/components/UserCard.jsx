const UserCard = ({ user }) => {
  if (!user) return null;

  return (
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
          src={user.avatar_url}
          alt={user.login}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%'
          }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: '0 0 5px 0' }}>{user.name || user.login}</h2>
          <p style={{ margin: '0', color: '#586069' }}>@{user.login}</p>
          {user.bio && <p style={{ margin: '10px 0 0 0' }}>{user.bio}</p>}
        </div>
      </div>
      
      <div style={{ marginTop: '15px', display: 'flex', gap: '20px', fontSize: '14px' }}>
        {user.location && (
          <span>📍 {user.location}</span>
        )}
        {user.public_repos !== undefined && (
          <span>📦 {user.public_repos} repos</span>
        )}
        {user.followers !== undefined && (
          <span>👥 {user.followers} followers</span>
        )}
      </div>
      
      <a
        href={user.html_url}
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
  );
};

export default UserCard;
