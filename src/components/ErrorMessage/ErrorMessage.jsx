import React from 'react';
import { StyledError } from './ErrorMessage.styled';

function ErrorMessage({ error }) {
  return (
    <StyledError>
      Something went wrong, try again. <span>{error}</span>
    </StyledError>
  );
}

export default ErrorMessage;
