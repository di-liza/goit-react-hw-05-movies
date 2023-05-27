const { default: styled } = require('@emotion/styled');

export const Form = styled.form`
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-top: 30px;
  gap: 15px;
  .input {
    max-width: 200px;
    min-height: 40px;
    padding: 10px;
    outline: none;
    background: #e8e8e8;
    box-shadow: -3px 0px 21px #c8c8c8, 6px 0px 2px #ffffff;
    border: none;
    border-radius: 10px;
    transition: all 0.5s;

    :focus {
      background: #e8e8e8;
      box-shadow: inset 5px 5px 17px #c8c8c8, inset -5px -5px 17px #ffffff;
    }
  }

  .search-button {
    border: none;
    height: 36px;
    outline: none;
    background-color: #900909;
    padding: 10px 20px;
    font-size: 14px;
    color: #fff;
    border-radius: 10px;
    transition: all ease 0.1s;
    box-shadow: 0px 5px 0px 0px #c81010;
    :active {
      transform: translateY(5px);
      box-shadow: 0px 0px 0px 0px #c81010;
    }
  }

  .search-button:hover {
    background-color: #450e0e;
  }
`;
