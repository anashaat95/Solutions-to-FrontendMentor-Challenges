import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { addOnsData } from "../../data/data";
import { eAddOn, ePeroid, FormTypes } from "../types/formTypes";

const AddOnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const AddOnCard = styled.article<{ selected?: boolean }>`
  cursor: pointer;
  width: 100%;
  padding: 2rem 1rem;
  border: 2px solid var(--muted);
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(71, 61, 255, 0.1);
    border-color: var(--focus);
  }

  ${({ selected }) =>
    selected &&
    `background-color: rgba(71, 61, 255, 0.1);
    border-color: var(--focus);`}

  .price {
    cursor: pointer;
    margin: 0;
    margin-left: auto;
    font-size: 1.4rem;
    font-weight: 700;
    margin-right: 2rem;
    color: var(--focus);
  }
`;

const CardDetails = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 700;
  }

  p {
    cursor: pointer;
    margin: 0 !important;
    font-size: 1.4rem;
  }
`;

const Checkbox = styled.div`
  position: relative;

  input {
    appearance: unset;
    height: 2.4rem;
    width: 2.4rem;
    border: 1px solid var(--focus);
    border-radius: 0.5rem;
    cursor: pointer;
    z-index: 1;
    transition: background-color 0.1s ease-in, opacity 0.1s ease-in;

    &:checked {
      background-color: var(--focus);
      border-color: transparent;
    }

    &:checked + svg {
      opacity: 1;
    }
  }

  svg {
    z-index: 10;
    position: absolute;
    fill: white;
    top: 15%;
    left: 15%;
    z-index: 10;
    width: 70%;
    height: 70%;
    opacity: 0;
  }
`;

const AddOnsStep: React.FC = () => {
  const { watch, setValue, getValues } = useFormContext<FormTypes>();
  const isYearly = getValues("period") === ePeroid.yearly;
  const watchAddOns = watch("addOns");

  const toggleAddOns = (selected: boolean, addOn: eAddOn) => {
    if (selected)
      setValue(
        "addOns",
        watchAddOns.filter((ao) => ao !== addOn)
      );
    else setValue("addOns", [...watchAddOns, addOn]);
  };

  return (
    <AddOnsContainer>
      {addOnsData.map((addon) => {
        const selected = watchAddOns.includes(addon.title);

        return (
          <AddOnCard
            key={addon.title}
            className="card"
            selected={selected}
            onClick={() => {
              toggleAddOns(selected, addon.title);
            }}
          >
            <Checkbox>
              <input
                type="checkbox"
                id="online-service"
                checked={selected}
                onClick={() => {
                  toggleAddOns(selected, addon.title);
                }}
              />
              <svg viewBox="0 0 335.765 335.765">
                <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795" />
              </svg>
            </Checkbox>

            <CardDetails className="card--details">
              <label htmlFor={addon.title}>{addon.title}</label>
              <p>{addon.description}</p>
            </CardDetails>
            <p className="price">+${isYearly ? addon.price.yearly : addon.price.monthly}/mo</p>
          </AddOnCard>
        );
      })}
    </AddOnsContainer>
  );
};

export default AddOnsStep;
