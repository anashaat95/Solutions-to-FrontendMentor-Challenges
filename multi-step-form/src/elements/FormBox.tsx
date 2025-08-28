import React, { forwardRef } from "react";
import styled from "styled-components";

const Container = styled.div<{ error?: boolean }>`
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
  }

  label {
    display: block;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--text);
  }

  .input {
    width: 100%;
    padding: 1.4rem 1.6rem;
    border-radius: var(--radius-sm);
    border: 1px solid ${({ error }) => (error ? "var(--error)" : "var(--line)")};
    font-size: 1.6rem;
    color: var(--text);
    font-weight: 500;

    &::placeholder {
      color: var(--line);
    }

    &:focus {
      border-color: var(--focus);
      box-shadow: var(--input-shadow);
      outline: none;
    }
  }

  .error-text {
    font-size: 1.2rem;
    color: var(--error);
    font-weight: 700;
  }
`;

interface FormBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: any;
  label: string;
}

const FormBox = forwardRef<HTMLInputElement, FormBoxProps>(({ label, error, ...rest }, ref) => {
  return (
    <Container>
      <div className="row">
        <label htmlFor={rest.name}>{label}</label>
        {error && <span className="error-text">{error?.message}</span>}
      </div>
      <input ref={ref} className="input" {...rest} />
    </Container>
  );
});

FormBox.displayName = "FormBox";

export default FormBox;
