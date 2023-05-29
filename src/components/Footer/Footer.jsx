import React from 'react';

import { StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Themoviedb API. All rights reserved.
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
