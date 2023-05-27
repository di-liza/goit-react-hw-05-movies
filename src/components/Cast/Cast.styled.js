const { default: styled } = require('@emotion/styled');

// export const MovieListStyled = styled.ul`
//   display: grid;
//   grid-gap: 24px;
//   max-width: 1292px;
//   grid-template-columns: repeat(auto-fit, minmax(133px, 1fr));
//   margin: 50px auto;

//   .styled-movie-item {
//     height: 202px;
//     width: 140px;
//     background-color: #1a1a1a;

//     border: 3px solid #8b000a;
//     border-radius: 4px;
//     flex-direction: column;
//     display: flex;
//     position: relative;
//     overflow: hidden;
//   }
//   .movieCard__img {
//     width: 136px;
//     height: 197px;
//   }
//   .movieCard__title {
//     position: absolute;
//     color: #fff;
//     background-color: rgb(42 37 38 / 61%);
//     gap: 12px;
//     padding: 10px;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     font-size: 12px;
//   }
//   .movieCard__title-name {
//     color: #ffffff;
//     font-weight: 500;
//     font-size: 13px;
//   }
//   .movieCard__title-character {
//     color: #ff3535;

//     span {
//       color: #fff;
//     }
//   }
// `;

export const CastStyled = styled.ul`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  margin: 20px 0px;
  width: 100%;
  max-width: 1200px;
  transition: all 0.2s ease-in-out 0s;
  padding: 10px;
  overflow: overlay;
  margin: 0 auto;

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .item {
    display: flex;
    flex-direction: row;
    height: 200px;
    gap: 20px;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 10px;
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
  .photo {
    border-radius: 5px;
  }
  .name {
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
    margin: 10px 0px;
    width: 25%;
    display: flex;

    align-items: center;
  }
  .character {
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    margin: 10px 0px;
    max-width: 50%;
    display: flex;

    align-items: center;
  }
`;
