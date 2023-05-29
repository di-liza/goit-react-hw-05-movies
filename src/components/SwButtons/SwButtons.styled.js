const { default: styled } = require('@emotion/styled');

export const ButtonWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  .button {
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    background-color: #900909;
    display: flex;
    align-items: flex-end;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff0c0c;
    }
  }
  .button[disabled] {
    background-color: #4c2b2b;

    &:hover {
      cursor: default;
    }
  }
`;

export const Container = styled.ul`
  .paginationListContainer {
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

      &:hover {
        background-color: #ff0c0c;
      }
      a {
        padding: 2px 18px;
      }
    }
  }
`;
