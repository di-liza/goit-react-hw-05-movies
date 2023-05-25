const { default: styled } = require('@emotion/styled');

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;

  .movie-search-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-right: 10px;
  }

  .movie-search-button {
    padding: 12px 20px;
    background-color: #900909;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  .movie-search-button:hover {
    background-color: #c81010;
  }
`;
