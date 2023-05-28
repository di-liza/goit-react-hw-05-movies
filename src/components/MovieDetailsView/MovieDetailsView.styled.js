import { NavLink } from 'react-router-dom';

const { default: styled } = require('@emotion/styled');

export const StyledMovieDetailsView = styled.main`
  overflow: auto;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
  position: relative;

  ::after {
    content: '';
    position: absolute;
    z-index: -1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 56vmax;
    background-image: linear-gradient(
        to right,
        rgb(0 0 0),
        rgba(47, 48, 58, 0.4)
      ),
      url(${props => props.bgImage});
    background-size: cover;
    background-position: 50% 50%;
  }
  .poster {
    width: 300px;
    margin-right: 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  }

  .info {
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-evenly;
    padding-top: 100px;
  }
  .score {
    color: #ff9d1b;
    width: 300px;
    margin: 10px 0;
  }
  .overview {
    width: 300px;
    margin: 10px 0;
  }

  .genres {
    color: #ff9d1b;
    margin: 10px 0;
  }
  .genres-list {
    display: flex;
    gap: 10px;
    justify-content: left;
    align-items: center;
    .genres-item {
      position: relative;
      ::after {
        content: '';
        background-color: #ff9d1b;
        position: absolute;
        width: 1px;
        height: 100%;
        top: 0;
        right: -5px;
      }
    }
  }
  .additional-info {
    margin-top: 30px;
  }
  .add-info__title {
    text-align: center;
    font-weight: bold;
    font-size: 25px;
  }
  .add-info__list {
    position: relative;
    z-index: 10000;
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
    color: #ff9d1b;
  }
  &:hover svg {
    color: #ff9d1b;
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
  color: #fff;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #8566665e;
  border: 1px solid #e8e8e8;

  &.active {
    background-color: #900909;
  }
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
