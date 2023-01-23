import React from "react";
import styled, { css } from "styled-components";

function Button({ children, size, color, padding, margin }) {
  return (
    <StyledButton size={size} color={color} padding={padding} margin={margin}>
      {children}
    </StyledButton>
  );
}

export default Button;

const ButtonSize = css`
  ${(props) =>
    props.size === "large" &&
    css`
      font-size: 1.5rem;
      height: 2.5rem;
      width: 4rem;
    `}
  ${(props) => props.size === "small" && css``}
`;

const StyledButton = styled.button`
  display: block;
  height: 1.5rem;
  outline: none;
  border: none;
  border-radius: 4px;
  font-family: "Nanum Gothic", "malgun gothic", AppleGothic, dotum, sans-serif;
  font-weight: 600;
  background: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  transition: all 0.5s;

  ${ButtonSize}

  :hover {
    transform: scale(1.25) perspective(1px);
  }
`;
