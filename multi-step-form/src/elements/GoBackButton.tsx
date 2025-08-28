import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  background: none;
  color: var(--muted);
  border-radius: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--btn-hover);
  }
`;

const GoBackButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <Container {...props}>Go Back</Container>;
};

export default GoBackButton;
