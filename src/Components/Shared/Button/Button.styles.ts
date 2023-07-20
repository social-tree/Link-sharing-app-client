import { TButtonType } from "./Button.types";
import { Typography } from "Styles";
import styled from "styled-components";

export const StyledButton = styled.button<{ buttonType: TButtonType }>`
  background: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 46px;
  border-radius: 8px;
  cursor: pointer;
  justify-content: center;

  transition: .5s ease color, .5s ease background;

  path {
    transition: .5s ease fill;
  }

  ${Typography.HeadingS}

  ${({ buttonType }) =>
    buttonType === "tab"
      ? `
        width: 130px;
        color: #737373;
    `
      : buttonType == "primary"
      ? `
        width: 227px;    
        background: #633CFF;  
        color: #fff;
      `
      : `
        width: 227px;    
        color: #633CFF;
        border: 1px solid #633CFF;
      
      `}

    &:active {
    ${({ buttonType }) =>
      buttonType == "primary"
        ? `
        border-radius: 8px;
        background: #BEADFF;
        box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
      `
        : buttonType == "secondary"
        ? `
        background: #EFEBFF;
      `
        : ""}
  }

  &:disabled {
    ${({ buttonType }) =>
      buttonType === "primary"
        ? `
        opacity: 0.25;
        background: #633CFF;
    
    `
        : buttonType === "secondary"
        ? `
        border: 1px solid #633CFF;
        opacity: 0.25;
    
    `
        : ""}
  }

  &.active {
    color: #633cff;
    background: #efebff;

    path {
        fill: #633CFF
    }
  }
    ${props => props.buttonType === "tab" ? `
    &:hover {
        color: #633CFF;
    }

    &:hover path {
        fill: #633CFF
    }
    
    ` : ""}

`;
