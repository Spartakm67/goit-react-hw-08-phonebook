import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations'; 
import { useAuth } from 'hooks/useAuth'; 
import { UserMenuWrapper, UserMenuName, LogoutBtn } from './UserMenu.styled';  

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <UserMenuName>Welcome, {user.name}</UserMenuName>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutBtn>
    </UserMenuWrapper>
  );
};