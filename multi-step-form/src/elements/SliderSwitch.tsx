import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 5rem;
  height: 2.4rem;
  background: var(--text);
  border-radius: 10rem;
  cursor: pointer;
  transition: background 0.2s ease;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);

  .switch-label:checked + .switch {
    transform: translate(2.4rem, -50%);
  }
`;

const SwitchKnob = styled.label`
  cursor: pointer;
  content: "";
  position: absolute;
  height: 1.6rem;
  width: 1.6rem;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: var(--bg);
  z-index: 100;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.12);
  transition: transform 0.22s ease;
`;

const SwitchCheckbox = styled.input`
  visibility: hidden;
  cursor: pointer;
`;

const SliderSwitch: React.FC<{ checked: boolean; onClick: () => void }> = ({ checked = false, onClick = undefined }) => {
  return (
    <Container onClick={onClick}>
      <SwitchCheckbox type="checkbox" checked={checked} className="switch-label" />
      <SwitchKnob className="switch" htmlFor="switch"></SwitchKnob>
    </Container>
  );
};

export default SliderSwitch;
