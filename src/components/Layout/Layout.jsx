import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { StyledHeader, StyledLink } from './Layout.styled';
import { Loader } from 'components';

import logo from '../icons/logo.png';

function Layout() {
  return (
    <>
      <StyledHeader>
        <nav className="navigation">
          <img className="logoImg" src={logo} alt="" />
          <div className="links-box">
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </div>
        </nav>
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
