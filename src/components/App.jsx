import { Routes, Route, NavLink } from 'react-router-dom';
import { Home, Movies, NotFound } from '../pages';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;

  &.active {
    color: orange;
  }
`;
export const App = () => {
  return (
    <>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
