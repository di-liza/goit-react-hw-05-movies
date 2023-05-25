import { NavLink } from 'react-router-dom';
const { default: styled } = require('@emotion/styled');

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: black;
  gap: 10px;
  padding: 10px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;

  &.active {
    color: #bf0e0e;
  }
`;
