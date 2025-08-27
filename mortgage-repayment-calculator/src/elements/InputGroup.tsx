import { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";

type inputGroupContextTypes = { error: any; setError: (error: any) => void };
const defaultValues: inputGroupContextTypes = { error: undefined, setError: () => {} };

const InputGroupContext = createContext(defaultValues);

const useInputGroupContext = (): inputGroupContextTypes => {
  const ctx = useContext(InputGroupContext);
  if (ctx === undefined) throw new Error("Context is called outside the provider");

  return ctx;
};

const Container = styled.div<{ isError?: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.slate500};
  border-radius: ${({ theme }) => theme.borderRadiusXs};
  overflow: hidden;
  height: 4rem;
  position: relative;
  font-weight: 700;

  border-color: ${({ isError, theme }) => isError && theme.error};
  border-width: 2px;
`;

const StyledError = styled.p`
  color: ${({ theme }) => theme.error};
  font-weight: 700;
  font-size: 1.2rem;
`;

const InputGroupRoot: React.FC<{ err?: any; children: React.ReactNode }> = ({ err, children }) => {
  const [error, setError] = useState<any>(undefined);

  useEffect(() => {
    setError(err);
    return () => {};
  }, [err, setError]);

  return (
    <InputGroupContext.Provider value={{ error, setError }}>
      <Container isError={error?.message !== undefined}>{children}</Container>
      <StyledError>{error?.message}</StyledError>
    </InputGroupContext.Provider>
  );
};

const PrefixContainer = styled.span<{ isError?: boolean }>`
  position: absolute;
  left: 0;
  padding: 2rem;

  background: ${({ isError, theme }) => (isError ? theme.error : theme.slate100)};
  color: ${({ isError, theme }) => (isError ? theme.white : theme.slate700)};

  & + input {
    padding-left: 6rem;
  }
`;

const Prefix: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { error } = useInputGroupContext();
  return <PrefixContainer isError={error?.message !== undefined}>{children}</PrefixContainer>;
};

const SuffixContainer = styled.span<{ isError?: boolean }>`
  position: absolute;
  right: 0;
  padding: 2rem;
  background: ${({ isError, theme }) => (isError ? theme.error : theme.slate100)};
  color: ${({ isError, theme }) => (isError ? theme.white : theme.slate700)};
`;

const Suffix: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { error } = useInputGroupContext();
  return <SuffixContainer isError={error?.message !== undefined}>{children}</SuffixContainer>;
};

const StyledInput = styled.input`
  font-weight: inherit;
  font-size: inherit;
  width: 100%;
  border: none;
  padding: 1rem;
  outline: none;
`;

const InputGroup = Object.assign(InputGroupRoot, { Prefix, Suffix, Input: StyledInput });

export default InputGroup;
