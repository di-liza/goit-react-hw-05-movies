const { default: styled } = require('@emotion/styled');

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;

  .movie-search-input {
    max-width: 200px;
    min-height: 40px;
    padding: 10px;
    font-family: 'Courier New', Courier, monospace;
    outline: none;
    background: #e8e8e8;
    box-shadow: 5px 5px 17px #c8c8c8, -5px -5px 17px #ffffff;
    border: none;
    border-radius: 10px;
    transition: all 0.5s;

    :focus {
      background: #e8e8e8;
      box-shadow: inset 5px 5px 17px #c8c8c8, inset -5px -5px 17px #ffffff;
    }
  }
  /* background-color: #900909; */

  .movie-search-button {
    border: none;
    outline: none;
    background-color: #900909;
    padding: 10px 20px;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    border-radius: 5px;
    transition: all ease 0.1s;
    box-shadow: 0px 5px 0px 0px #c81010;
    :active {
      transform: translateY(5px);
      box-shadow: 0px 0px 0px 0px #c81010;
    }
  }

  .movie-search-button:hover {
    background-color: #c81010;
  }
`;
