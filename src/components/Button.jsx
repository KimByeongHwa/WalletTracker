import React from "react";
import styled from "styled-components";

function Button({ children, padding, color }) {
  return (
    <StyledButton padding={padding} color={color}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: ${(props) => props.padding};
  background: ${(props) => props.color};
`;
