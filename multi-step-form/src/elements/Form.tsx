import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.form`
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 56rem;

  & > :last-child {
    margin-top: auto;
  }
`;

const Form: React.FC<{ children: ReactNode; onSubmit: React.FormEventHandler<HTMLFormElement> }> = ({ children, onSubmit }) => {
  return <Container onSubmit={onSubmit}>{children}</Container>;
};

export default Form;
