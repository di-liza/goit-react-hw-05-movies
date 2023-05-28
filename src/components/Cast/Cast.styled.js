const { default: styled } = require('@emotion/styled');

export const CastStyled = styled.ul`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  margin: 20px 0px;
  width: 100%;
  max-width: 1200px;
  transition: all 0.2s ease-in-out 0s;
  padding: 10px;
  overflow-y: scroll;
  margin: 0 auto;
  max-height: 300px;

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
