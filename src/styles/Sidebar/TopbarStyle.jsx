import { styled } from "styled-components";

export const TopbarContainer = styled.div`
  width: 100%;
  height: 70px;
  background: #f9f9f9;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  backdrop-filter: blur(20px);
  box-shadow: rgba(235, 94, 6, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    height: 50px;
  }
`;

export const TopbarTitle = styled.div`
  font-size: 24px;
  color: #3a3b3c;
  line-height: 50px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  justify-self: center;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    /* background: linear-gradient(to right, #ff7300, #ff70ac); */
  }
  @media (max-width: 600px) {
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
  }
`;


