const { default: styled } = require('@emotion/styled');

export const ReviewsStyled = styled.main`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  margin: 20px 0px;
  width: 100%;
  max-width: 1242px;
  margin: 0 auto;
  transition: all 0.2s ease-in-out 0s;
  padding: 10px;
  overflow-y: scroll;
  max-height: 350px;
  .reviews-item {
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
    margin: 20px 0px;
    width: 100%;
    max-width: 1200px;
    margin-bottom: 10px;
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
    padding: 10px;
    background: #59555570;
    :hover {
      background: linear-gradient(
        90deg,
        rgb(251 11 11 / 50%) 0%,
        rgb(146 12 24 / 50%) 15%,
        rgb(169 85 19 / 50%) 35%,
        rgb(204 183 66 / 50%) 45%,
        rgba(255, 255, 255, 0.2) 90%
      );
    }
  }
  .author {
    font-size: 1.4rem;
    font-weight: 700;
    text-align: left;
    width: 100%;
    white-space: nowrap;
  }
  .review-text {
    font-size: 1rem;
    font-weight: 400;
    text-align: left;
  }
`;
