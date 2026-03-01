function ProfileSettings() {
  return (
    <div>
      <h2>Profile Settings</h2>
      <form style={{ maxWidth: '400px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Email Notifications:
          </label>
          <input type="checkbox" defaultChecked /> Enable email notifications
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Privacy:
          </label>
          <select style={{ width: '100%', padding: '5px' }}>
            <option>Public</option>
            <option>Private</option>
            <option>Friends Only</option>
          </select>
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Language:
          </label>
          <select style={{ width: '100%', padding: '5px' }}>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#28a745', 
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default ProfileSettings;
