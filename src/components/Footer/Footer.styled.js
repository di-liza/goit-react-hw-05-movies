const { default: styled } = require('@emotion/styled');

export const StyledFooter = styled.footer`
  background-color: #1d0202;
  padding: 20px;

  position: relative;
  width: 100%;
  bottom: 0;

  .footer-bottom {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
`;
