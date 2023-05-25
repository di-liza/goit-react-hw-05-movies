const { default: styled } = require('@emotion/styled');

export const MovieListStyled = styled.ul`
  display: grid;
  grid-gap: 24px;
  max-width: 1292px;
  grid-template-columns: repeat(auto-fit, minmax(133px, 1fr));
  margin: 50px auto;

  .styled-movie-item {
    height: 202px;
    width: 140px;
    background-color: #1a1a1a;

    border: 3px solid #8b000a;
    border-radius: 4px;
    flex-direction: column;
    display: flex;
    position: relative;
    overflow: hidden;
  }
  .movieCard__img {
    width: 136px;
    height: 197px;
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
    font-size: 12px;
  }
  .movieCard__title-name {
    color: #ffffff;
    font-weight: 500;
    font-size: 13px;
  }
  .movieCard__title-character {
    color: #ff3535;

    span {
      color: #fff;
    }
  }
`;
