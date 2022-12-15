import { Navigate } from 'react-router-dom';
import '../App.css'

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};
export default ProtectedRoute;