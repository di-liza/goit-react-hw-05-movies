const { default: styled } = require('@emotion/styled');

export const StyledMovieItem = styled.li`
  height: 400px;
  width: 300px;
  background-color: #1a1a1a;

  border: 3px solid #8b000a;
  border-radius: 4px;
  flex-direction: column;
  display: flex;
  position: relative;
  overflow: hidden;
  /* position: relative; */

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
