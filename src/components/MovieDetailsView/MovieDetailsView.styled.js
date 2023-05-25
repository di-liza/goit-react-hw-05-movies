const { default: styled } = require('@emotion/styled');
export const StyledMovieDetailsView = styled.div`
  height: 100vmax;
  position: relative;
  background-color: #000000d1;

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
    display: flex;
    flex-wrap: wrap;
    width: 350px;
    gap: 15px;
    align-items: center;
    justify-content: left;
  }
`;
export const AdditionalInfo = styled.div`
  /* position: absolute;
  bottom: 30%;
  left: 50%;
  z-index: 100; */
`;
