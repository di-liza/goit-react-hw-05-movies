const { default: styled } = require('@emotion/styled');

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  height: 100%;

  backdrop-filter: blur(10px);

  /* background-color: ; */
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;

    box-shadow: 0px -5px 20px 0px rgb(255, 66, 66),
      0px 5px 20px 0px rgb(14, 10, 145);
    background-image: linear-gradient(rgb(149, 17, 17) 35%, rgb(20, 22, 66));

    width: 100px;
    height: 100px;
    animation: spinning82341 1.7s linear infinite;
    text-align: center;
    border-radius: 50px;
    filter: blur(1px);
  }
  .spinner1 {
    background-color: rgb(36, 36, 36);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    filter: blur(10px);
  }

  @keyframes spinning82341 {
    to {
      transform: rotate(360deg);
    }
  }
`;
