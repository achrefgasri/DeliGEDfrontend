import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children, isAuthenticated, isAdmin }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (!isAdmin) {
    return <Navigate to="/Home_Super_Admin" />;
  }

  return children;
};

export default AdminRoute;


