import React from "react";
import styled from "styled-components";
import InputGroup from "./InputGroup";
import RadioGroup from "./RadioGroup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.7rem;
`;

const FormGroupRoot: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Label: React.FC<{ children: React.ReactNode } & React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children }, props) => {
  return <label {...props}>{children}</label>;
};

const FormGroup = Object.assign(FormGroupRoot, { Label, InputGroup, RadioGroup });

export default FormGroup;
