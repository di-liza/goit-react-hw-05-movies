import { NavLink } from 'react-router-dom';
const { default: styled } = require('@emotion/styled');

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  /* background-color: black; */
  gap: 10px;
  padding: 10px;
  position: relative;
  ::after {
    content: '';
    width: 1290px;
    height: 2px;
    background-color: #5a585847;
    top: 60px;
    position: absolute;
    z-index: -10;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  position: relative;

  &.active {
    color: #bf0e0e;

    ::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: #bf0e0e;

      top: 50px;

      position: absolute;
    }
  }
`;
