import styled from "styled-components";

const Container = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.5rem 0;

  .badge {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    font-size: 1.6rem;
    display: grid;
    place-items: center;
    font-weight: 700;
    border: 2px solid white;
    color: white;

    background: transparent;
    color: white;
    border-color: white;

    ${({ active }) =>
      active &&
      `
        background: var(--step-badge-bg);
        color: var(--text);
        border-color: var(--step-badge-bg);
    `}
  }

  small {
    display: block;
    color: var(--text-light);
    font-size: 1.2rem;
    margin-bottom: 2px;
  }

  span {
    display: block;
    font-weight: 700;
    font-size: 1.4rem;
  }

  @media (max-width: 650px) {
    small,
    span {
      display: none;
    }

    .badge {
      width: 4.8rem;
      height: 4.8rem;
      font-size: 2rem;
    }
  }
`;

const SidebarStep: React.FC<{ curStep: number; stepNum: number; title: string }> = ({ stepNum, curStep, title }) => {
  return (
    <Container className="step" active={curStep === stepNum}>
      <div className="badge">{stepNum}</div>
      <div>
        <small>Step {stepNum}</small>
        <span>{title}</span>
      </div>
    </Container>
  );
};

export default SidebarStep;
