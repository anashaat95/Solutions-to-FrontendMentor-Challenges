import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { useStepsContext } from "../../contexts/StepsContext";
import { addOnsData, plansData } from "../../data/data";
import { ePeroid, FormTypes } from "../types/formTypes";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;

  overflow: hidden;
`;

const CardDetails = styled.div`
  background: var(--bg);
  border-radius: 1rem;
  width: 100%;
  padding: 2rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  font-weight: 700;

  button {
    border: none;
    background: none;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 1rem;
    cursor: pointer;
    color: var(--muted);
    transition: all 0.2s ease-in;

    &:hover {
      color: var(--focus);
      text-decoration: underline;
    }
  }
`;

const CardItems = styled.div`
  border-top: 2px solid rgba(214, 217, 230, 0.5);
  margin-top: 3rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  font-size: 1.4rem;

  color: var(--muted);
`;

const CardItem = styled.div`
  display: flex;
  justify-content: space-between;

  & > :last-child {
    font-weight: 500;
    color: var(--text);
  }
`;

const CardTotal = styled.p`
  align-self: stretch;
  padding: 0 2rem;
  font-size: 1.4rem;

  display: flex;
  justify-content: space-between;

  & > :last-child {
    font-weight: 700;
    font-size: 1.8rem;
    color: var(--focus);
  }
`;

const FinishingStep: React.FC = () => {
  const { setCurStep } = useStepsContext();
  const { getValues } = useFormContext<FormTypes>();
  const period = getValues("period");
  const selectedPlanTitle = getValues("plan");
  const selectedPlan = plansData.find((p) => p.title === selectedPlanTitle);

  const selectedaddOnTitles = getValues("addOns");
  const selectedaddOns = addOnsData
    .map((addon) => {
      return selectedaddOnTitles.includes(addon.title) ? addon : null;
    })
    .filter(Boolean);

  const planTitle = selectedPlan?.title;
  let abbrPeriodText = "mo";
  let periodTextAdverb = "Monthly";
  let periodTextNoun = "month";
  let planPrice = selectedPlan?.price.monthly;

  if (period === ePeroid.yearly) {
    abbrPeriodText = "yr";
    periodTextAdverb = "Yearly";
    planPrice = selectedPlan?.price.yearly;
    periodTextNoun = "year";
  }

  const total = selectedaddOns.reduce(
    (sum, addon) => sum + ((period === ePeroid.monthly ? addon?.price.monthly : addon?.price.yearly) || 0),
    planPrice || 0
  );

  return (
    <Container className="card">
      <CardDetails className="card-details">
        <CardHeader className="card-header">
          <div>
            <h4>
              {planTitle} ({periodTextAdverb})
            </h4>
            <button className="change-link" onClick={() => setCurStep(2)}>
              Change
            </button>
          </div>
          <span className="price">
            ${planPrice}/{abbrPeriodText}
          </span>
        </CardHeader>

        {selectedaddOns.length > 0 && (
          <CardItems className="card-items">
            {selectedaddOns.map((addon) => (
              <CardItem className="card-item" key={addon?.title}>
                <span>{addon?.title}</span>
                <span>
                  + ${period === ePeroid.monthly ? addon?.price.monthly : addon?.price.yearly}/{period === ePeroid.monthly ? "mo" : "yr"}
                </span>
              </CardItem>
            ))}
          </CardItems>
        )}
      </CardDetails>

      <CardTotal className="card-total">
        <span>Total (per {periodTextNoun})</span>
        <span>
          + ${total}/{abbrPeriodText}
        </span>
      </CardTotal>
    </Container>
  );
};

export default FinishingStep;
