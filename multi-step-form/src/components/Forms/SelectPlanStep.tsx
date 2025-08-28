import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { plansData } from "../../data/data";
import PlanCard from "../../elements/PlanCard";
import SliderSwitch from "../../elements/SliderSwitch";
import { ePeroid, FormTypes } from "../types/formTypes";

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  margin-bottom: 2rem;
`;

const ToggleContainer = styled.div<{ isMonthly: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: var(--bg);
  padding: 1rem 0;
  border-radius: 0.5rem;

  color: var(--muted);
  font-size: 1.4rem;
  font-weight: 700;

  /* labels */
  .label {
    transition: color 0.2s ease;
    cursor: pointer;
  }

  ${({ isMonthly }) =>
    isMonthly
      ? `
      .monthly {
        color: var(--text);
      }`
      : `
        .yearly {
          color: var(--text);
        }`}
`;

const SelectPlanStep: React.FC = () => {
  const { register, watch, setValue } = useFormContext<FormTypes>();

  const watchPlan = watch("plan");
  const watchPeriod = watch("period");

  return (
    <>
      <CardsContainer>
        {plansData.map((curPlan) => (
          <PlanCard
            {...register("plan")}
            onClick={() => setValue("plan", curPlan.title)}
            plan={curPlan}
            key={curPlan.title.toString()}
            isMonthly={ePeroid.monthly === watchPeriod}
            active={watchPlan === curPlan.title}
          />
        ))}
      </CardsContainer>
      <ToggleContainer isMonthly={watchPeriod === ePeroid.monthly} className="billing-toggle" role="group" aria-label="Billing period">
        <span className="label monthly" onClick={() => setValue("period", ePeroid.monthly)}>
          Monthly
        </span>
        <SliderSwitch
          checked={ePeroid.yearly === watchPeriod}
          onClick={() => setValue("period", ePeroid.yearly === watchPeriod ? ePeroid.monthly : ePeroid.yearly)}
        />
        <span className="label yearly" onClick={() => setValue("period", ePeroid.yearly)}>
          Yearly
        </span>
      </ToggleContainer>
    </>
  );
};

export default SelectPlanStep;
