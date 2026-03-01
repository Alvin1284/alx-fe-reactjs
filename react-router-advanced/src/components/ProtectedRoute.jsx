import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // Simulate authentication check
  // In a real app, this would check actual auth state from context or a store
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    // Redirect to home if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
