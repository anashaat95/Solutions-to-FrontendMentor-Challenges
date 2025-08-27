import styled from "styled-components";
// type radioGroupContextTypes = { active: any; setActive: (active: boolean) => void };
// const defaultValues: radioGroupContextTypes = { active: false, setActive: () => {} };

// const RadioGroupContext = createContext(defaultValues);

// const useRadioGroupContext = (): radioGroupContextTypes => {
//   const ctx = useContext(RadioGroupContext);
//   if (ctx === undefined) throw new Error("Context is called outside the provider");

//   return ctx;
// };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  z-index: 1;
`;

const RadioLabel = styled.label<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: ${({ theme }) => theme.borderRadiusXs};
  padding: 1rem 2rem;
  cursor: pointer;
  background: ${({ active, theme }) => (active ? theme.accentLighter : theme.white)};
  border: ${({ active, theme }) => (active ? `2px solid ${theme.accent}` : `2px solid ${theme.slate300}`)};
  color: ${({ theme }) => theme.slate900};
  font-weight: 700;
`;

const RadioInput = styled.input<{ active?: boolean }>`
  position: relative;
  appearance: none;
  z-index: 10;
  cursor: inherit;

  &::before {
    border: none;
    visibility: visible;
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: ${({ theme }) => `1px solid ${theme.slate300}`};

    border-radius: 50%;
    height: 1.4rem;
    width: 1.4rem;
    z-index: 10;

    ${({ active, theme }) =>
      active &&
      `
        border:  3px solid ${theme.white};
        outline: 2px solid ${theme.accent};
        background-color:  ${theme.accent};
      `};
  }
`;

const RadioGroupRoot: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

const RadioGroup = Object.assign(RadioGroupRoot, { Label: RadioLabel, Input: RadioInput });

export default RadioGroup;
