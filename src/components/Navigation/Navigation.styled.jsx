import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
   display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  
  /* padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: orangered;
  }
  &:hover {
    background-color: #bbe4e9;
    font-weight: 700;
    color: orangered;
  } */

  &.active {
    color: #e84a5f;
  }
`;