import React, { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  background: var(--btn);
  color: #fff;
  padding: 1.4rem 2.2rem;
  border-radius: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--btn-hover);
  }
`;

const Button: React.FC<{ children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
