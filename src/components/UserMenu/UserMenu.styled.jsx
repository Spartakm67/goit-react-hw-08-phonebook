import styled from '@emotion/styled';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;  
`;

export const UserMenuName = styled.p`
  font-weight: 700;  
`;

export const LogoutBtn = styled.button`
  width: 65px;
  border-radius: 6px;
  font-size: 16px;
  padding: 4px 2px;
  border: 1px solid gray;
  font-weight: 500;
  color: #430f58;
  background-color: #cadefc;
    &:hover {
    background-color: #bbe4e9;
    font-weight: 700;
    color: #f95959;
  }
`;

