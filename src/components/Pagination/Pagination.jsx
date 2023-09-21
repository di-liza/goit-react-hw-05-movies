import React from 'react';
import { PaginationStyled } from './Pagination.styled';

function Pagination({ handlePageClick, totalPages }) {
  return (
    <PaginationStyled
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
