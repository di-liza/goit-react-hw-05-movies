import React from 'react';
import { SpinnerWrapper } from './Loader.styled';

function Loader() {
  return (
    <SpinnerWrapper>
      <div className="spinner">
        <div className="spinner1"></div>
      </div>
    </SpinnerWrapper>
  );
}

export default Loader;
