import React from 'react';
import { ButtonWrapper } from './SwButtons.styled';

function SwButtons({ onClickSwichBtn, page }) {
  return (
    <ButtonWrapper>
      <li>
        <button
          className="button"
          disabled={page === 1}
          onClick={() => {
            onClickSwichBtn('prev');
          }}
        >
          Prev page
        </button>
      </li>
      <li>
        <button
          className="button"
          onClick={() => {
            onClickSwichBtn('next');
          }}
        >
          Next page
        </button>
      </li>
    </ButtonWrapper>
  );
}

export default SwButtons;
