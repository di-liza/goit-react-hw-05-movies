import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
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

function Layout() {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
