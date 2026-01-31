import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const hasAvatar = localStorage.getItem('userAvatar');

  // If no avatar, redirect to creation. Otherwise, render the page (Outlet)
  return hasAvatar ? <Outlet /> : <Navigate to="/create-avatar" />;
};

export default ProtectedRoute;