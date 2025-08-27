import styled from "styled-components";

const Container = styled.button`
  align-self: flex-start;
  background: ${({ theme }) => theme.accent};
  border: none;
  padding: 1rem 3rem;
  border-radius: ${({ theme }) => theme.borderRadiusXXL};
  color: ${({ theme }) => theme.slate900};
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    height: 2.6rem;
    width: 2.6rem;
  }

  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 5px ${({ theme }) => theme.accent};
    transform: translateY(-1px);
  }

  &:focus {
    box-shadow: 0 1px 3px ${({ theme }) => theme.accent};
    transform: translateY(1px);
  }
`;

const CalculateBtn = () => {
  return (
    <Container type="submit">
      <svg>
        <path
          fill="currentColor"
          d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
        />
      </svg>
      <span>Calculate Repayments</span>
    </Container>
  );
};

export default CalculateBtn;
