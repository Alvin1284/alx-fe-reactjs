import { Navigate } from 'react-router-dom';

// Custom hook to check authentication status
const useAuth = () => {
  // Simulate authentication check
  // In a real app, this would check actual auth state from context or a store
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated;
};

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    // Redirect to home if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
