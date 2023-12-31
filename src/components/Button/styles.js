import styled, { css } from "styled-components";

const buttonStyles = css`

  border: 3px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 20 px;
  cursor: pointer;
  font-size: 100%;
  font-weight: 500;

  &:hover {
    color: #ff0000;
    background: #ffffff;
  }

  @media (max-width: 768px) {
    width:40%;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    font-size: 2vw;
    height: 3vh;
}


`;

export const ButtonWhite = styled.button`
  ${buttonStyles}


  


`;

export const ButtonRed = styled.button`
  ${buttonStyles}

  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 /30%);

  &:hover {
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 /30%);
    background: #ff0000;
    color: #ffffff;
  }
`;
