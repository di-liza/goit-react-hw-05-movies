const { default: styled } = require('@emotion/styled');

export const MovieListStyled = styled.ul`
  display: grid;

  grid-gap: 20px;
  max-width: 1318px;
  margin: 50px auto;

  .author-rev {
    color: #9b0000;
    font-size: 16px;
    font-weight: 500;
    span {
      color: #fff;
      font-weight: 400;
    }
  }
`;
