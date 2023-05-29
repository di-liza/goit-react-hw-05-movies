import React from 'react';
import { ButtonWrapper } from './SwButtons.styled';
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';

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
          <BiChevronsLeft />
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
          <BiChevronsRight />
        </button>
      </li>
    </ButtonWrapper>
  );
}

export default SwButtons;
