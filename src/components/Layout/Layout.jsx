import React from 'react';
import { Outlet } from 'react-router-dom';

import { StyledNav, StyledLink } from './Layout.styled';

function Layout() {
  return (
    <div>
      <StyledNav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
