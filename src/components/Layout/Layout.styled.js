import { NavLink } from 'react-router-dom';
const { default: styled } = require('@emotion/styled');

export const StyledHeader = styled.header`
  padding-bottom: 10px;
  ::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #fefefe5c;
    top: 97px;
    position: absolute;
    z-index: -10;
  }
  .navigation {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    position: relative;
    padding: 0 100px;
    align-items: center;
  }
  .links-box {
    display: flex;
    gap: 22px;
    align-items: center;
  }

  .logoImg {
    width: 56px;
    height: 70px;
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
      position: absolute;
      top: 53px;
      width: 6px;
      height: 5px;
      border-radius: 50%;
      background-color: #bf0e0e;
      box-shadow: 0 0 6px 3px #bf0e0e;
    }
  }
`;

export const Container = styled.ul`
  .paginationListContainer {
    display: flex;
    justify-content: center;
    gap: 5px;

    li {
      width: 45px;
      height: 25px;
      display: flex;
      background-color: #900909;
      border-radius: 4px;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;

      &:hover {
        background-color: #ff0c0c;
      }
      a {
        padding: 2px 18px;
      }
    }
  }
`;
