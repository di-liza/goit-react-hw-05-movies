import React, { Suspense } from 'react';
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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Layout;
