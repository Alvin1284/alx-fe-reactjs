import { Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Profile Page</h1>
      <p>Manage your profile settings and view your details.</p>
      
      {/* Nested navigation */}
      <nav style={{ 
        margin: '20px 0', 
        padding: '10px', 
        backgroundColor: '#f0f0f0',
        borderRadius: '5px'
      }}>
        <Link 
          to="details" 
          style={{ 
            marginRight: '15px', 
            textDecoration: 'none', 
            color: '#007bff',
            fontWeight: 'bold'
          }}
        >
          Profile Details
        </Link>
        <Link 
          to="settings" 
          style={{ 
            textDecoration: 'none', 
            color: '#007bff',
            fontWeight: 'bold'
          }}
        >
          Profile Settings
        </Link>
      </nav>

      {/* Nested routes will render here */}
      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        border: '1px solid #ddd',
        borderRadius: '5px'
      }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
