import styled from "styled-components";

const ClearBtn = styled.button`
  display: inline-block;
  background: none;
  border: none;
  font-size: inherit;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  color: ${({ theme }) => theme.error};

  &:hover {
    text-decoration: underline;
  }
`;

export default ClearBtn;
