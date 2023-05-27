// import heroImg from '../images/background.jpg'
const { default: styled } = require('@emotion/styled');

export const HeroStyled = styled.div`
  width: 100%;
  height: 500px;
  background-color: #585858;
  background-image: url('https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4');
  background-position: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 180px 0 180px 50px;

  .hero-title {
    font-size: 50px;
  }
  .hero-description {
    font-size: 28px;
    margin-top: 10px;
  }
`;
