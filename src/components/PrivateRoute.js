// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/authSelectors'; 

// export const PrivateRoute = ({ component: Component }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return !isLoggedIn ? <Navigate to="/login" /> : Component;
// };

import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth'; 

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
