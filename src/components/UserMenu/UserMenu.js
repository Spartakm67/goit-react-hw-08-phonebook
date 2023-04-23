import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations'; 
import { useAuth } from 'hooks/useAuth'; 
import { UserMenuWrapper, UserMenuName } from './UserMenu.styled';  

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <UserMenuName>Welcome, {user.name}</UserMenuName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuWrapper>
  );
};