const { default: styled } = require('@emotion/styled');

export const StyledMain = styled.main`
  height: 100vmax;

  background-image: linear-gradient(to right, rgb(0 0 0), rgba(47, 48, 58, 0.4)),
    url(${props => props.bgImage});
  background-size: cover;
  background-position: 50% 50%;

  overflow-y: scroll;
`;

export const StyledMovieDetailsView = styled.div`
  height: 100vmax;
  position: relative;

  .movie-details__poster {
    width: 300px;
    margin-right: 20px;
  }

  .movie-details__info {
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-evenly;
    padding-top: 100px;
  }
  .movie-details__info-overview {
    width: 300px;
  }

  .movie-details__additional-info {
    display: flex;

    list-style: none;
  }

  .movie-details__additional-info li {
    margin: 0 10px;
  }

  .movie-details__link-button {
    display: inline-block;
    padding: 8px 16px;
    background-color: #f1f1f1;
    color: #333;
    text-decoration: none;
    border-radius: 4px;
  }

  .movie-details__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
    width: 100%;
    height: 100vmax;
    background-color: #333;
  }
  .movie-details__bg-img {
    width: 100%;
  }
  .info-box {
    /* display: flex;
    flex-wrap: wrap;
    width: 350px;
    gap: 15px;
    align-items: center;
    justify-content: left; */
  }
`;
export const AdditionalInfo = styled.div`
  /* position: absolute;
  bottom: 30%;
  left: 50%;
  z-index: 100; */
  margin-top: 30px;

  .add-info__title {
    text-align: center;
    font-weight: bold;
    font-size: 25px;
  }
  .add-info__list {
    display: flex;
    justify-content: center;
    gap: 10px;
    font-size: 25px;
    margin: 18px;
  }
`;
