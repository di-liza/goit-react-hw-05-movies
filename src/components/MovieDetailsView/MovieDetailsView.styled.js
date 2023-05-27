import { NavLink } from 'react-router-dom';

const { default: styled } = require('@emotion/styled');

export const StyledMain = styled.main`
  height: 56vmax;

  background-image: linear-gradient(to right, rgb(0 0 0), rgba(47, 48, 58, 0.4)),
    url(${props => props.bgImage});
  background-size: cover;
  background-position: 50% 50%;

  overflow: auto;

  /* Скрытие скроллбара */
  ::-webkit-scrollbar {
    display: none;
  }
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

export const BackLink = styled(NavLink)`
  position: relative;
  top: 30px;
  margin-left: 15px;
  display: flex;
  gap: 5px;
  align-items: flex-end;
  z-index: 51000;

  &:hover {
    color: #bf0e0e;
  }
  &:hover svg {
    color: #bf0e0e;
  }

  .back-link-box {
    position: relative;
    top: 30px;
    left: 30px;
    display: flex;
    gap: 5px;
    align-items: flex-end;
  }
`;
export const PageElLink = styled(NavLink)`
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  /* box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff; */
  :active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
  :before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }
  :after {
    content: '';
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #900909;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }
  :hover {
    color: #ffffff;
    border: 1px solid #900909;
  }
  :hover:before {
    top: -35%;
    background-color: #900909;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
  :hover:after {
    top: -45%;
    background-color: #900909;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;
