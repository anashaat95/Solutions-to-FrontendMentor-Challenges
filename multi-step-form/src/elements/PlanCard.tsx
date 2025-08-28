import React from "react";
import styled from "styled-components";

const BtnContainer = styled.button<{ active?: boolean }>`
  height: 14rem;
  border: 2px solid ${({ active }) => (active ? "var(--focus)" : "var( --line)")};
  border-radius: var(--radius-xs);
  padding: 1rem;
  background: ${({ active }) => (active ? "var(--bg)" : "white")};
  cursor: pointer;
  transition: 0.2s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  flex: 1;

  &:hover {
    border-color: var(--focus);
  }

  img {
    width: 4.2rem;
    height: 4.2rem;
  }

  .plan--details {
    text-align: start;
    padding-left: 0.5rem;
  }

  .plan--title {
    margin: 0.5rem 0;
    text-align: start;
  }

  .plan--price {
    margin: 0;
    color: gray;
  }

  .plan--months-free {
    color: var(--text);
    font-weight: 600;
    margin: 0;
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`;

interface PlanCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  plan: { title: string; price: { monthly: number; yearly: number }; icon: string };
  isMonthly: boolean;
  active?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isMonthly, active, ...rest }) => {
  return (
    <BtnContainer active={active} type="button" {...rest}>
      <img src={`${plan.icon}`} alt={`${plan.title} Icon`} />
      <div className="plan--details">
        <h4 className="plan--title">{plan.title}</h4>
        <div>
          <p className="plan--price">
            ${isMonthly ? plan.price.monthly : plan.price.yearly}/{isMonthly ? "mo" : "yr"}
          </p>
          <p style={{ visibility: isMonthly ? "hidden" : "visible" }} className="plan--months-free">
            2 months free
          </p>
        </div>
      </div>
    </BtnContainer>
  );
};

export default PlanCard;
