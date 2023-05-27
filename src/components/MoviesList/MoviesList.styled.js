const { default: styled } = require('@emotion/styled');

export const MovieListStyled = styled.ul`
  display: grid;

  grid-gap: 20px;
  max-width: 1318px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 50px auto;
  padding: 10px 0;

  .item {
    height: 400px;
    width: 300px;
    background-color: #1a1a1a;

    border: 3px solid #8b000a;
    border-radius: 4px;
    flex-direction: column;
    display: flex;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: #ad1414 0px 0px 10px;
      z-index: 1;
    }
  }

  .movieCard__img {
    width: 300px;
    height: 400px;
  }
  .movieCard__title {
    position: absolute;
    color: #fff;
    background-color: rgb(42 37 38 / 61%);
    gap: 12px;
    padding: 10px;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 20px;
  }
`;
