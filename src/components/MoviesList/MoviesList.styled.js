const { default: styled } = require('@emotion/styled');

export const MovieListStyled = styled.ul`
  display: grid;

  grid-gap: 20px;
  max-width: 1318px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 50px auto;
`;
