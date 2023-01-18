import React from "react";
import styled, { css } from "styled-components";

function Button({ children, size, color }) {
  return (
    <StyledButton size={size} color={color}>
      {children}
    </StyledButton>
  );
}

export default Button;

const ButtonSize = css`
  ${props =>
    props.size === 'large' &&
    css`
      font-size: 1.5rem;
      padding: 20px 20px;
    `
  }
   ${props =>
    props.size === 'small' &&
    css`
      
    `
  }
`

const StyledButton = styled.button`
  height: 1.5rem;
  outline: none;
  border: none;
  border-radius: 4px;
  font-family: 'Nanum Gothic', 'malgun gothic', AppleGothic, dotum, sans-serif;
  font-weight: 600;
  background: ${(props) => props.color};
  /* padding: ${(props) => props.padding}; */

  ${ButtonSize}

  :hover{
    transform: scale(1.25) perspective(1px);
    transition: 0.8s;
  }
`;

