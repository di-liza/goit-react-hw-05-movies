import ReactPaginate from 'react-paginate';

const { default: styled } = require('@emotion/styled');

export const PaginationStyled = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: 5px;

  li {
    width: 45px;
    height: 25px;
    display: flex;
    background-color: #900909;
    border-radius: 4px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff0c0c;
    }
    a {
      display: inline-block;
      padding: 3px 18px;
    }
  }
`;
