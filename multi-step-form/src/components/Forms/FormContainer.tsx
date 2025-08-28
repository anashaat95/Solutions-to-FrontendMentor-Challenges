import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { useStepsContext } from "../../contexts/StepsContext";
import Button from "../../elements/Button";
import Form from "../../elements/Form";
import GoBackButton from "../../elements/GoBackButton";
import { ePeroid, ePlan, FormTypes } from "../types/formTypes";
import AddOnsStep from "./AddOnsStep";
import FinishingStep from "./FinishingStep";
import InfoStep from "./InfoStep";
import SelectPlanStep from "./SelectPlanStep";
import { stepsDetails } from "./stepsDetails";

const defaultValues: FormTypes = {
  name: "",
  email: "",
  phone: "",
  plan: ePlan.arcade,
  period: ePeroid.monthly,
  addOns: [],
};

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 650px) {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: white;
    height: 10rem;
    width: 100%;
    padding: 0 2rem;
  }
`;

const StepsForm = () => {
  const { curStep, setCurStep } = useStepsContext();
  const methods = useForm<FormTypes>({ defaultValues, mode: "onChange" });

  const onSubmit: SubmitHandler<FormTypes> = (_, e) => {
    e?.preventDefault();
    // console.log(data);
    setCurStep(5);
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormTypes)[] = [];
    if (curStep === 1) fieldsToValidate = ["name", "email", "phone"];
    const isValid = await methods.trigger(fieldsToValidate);
    if (isValid) setCurStep(curStep + 1);
  };

  return (
    <>
      <h1>{stepsDetails[curStep - 1].title}</h1>
      <p dangerouslySetInnerHTML={{ __html: String(stepsDetails[curStep - 1].subTitle) }} />
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit, (errors) => console.log(errors))}>
          {curStep === 1 && <InfoStep />}
          {curStep === 2 && <SelectPlanStep />}
          {curStep === 3 && <AddOnsStep />}
          {curStep === 4 && <FinishingStep />}

          <ActionsContainer className="actions">
            {curStep > 1 && <GoBackButton type="button" onClick={() => setCurStep(curStep - 1)} />}
            {curStep < 4 ? (
              <Button key={curStep} type="button" onClick={nextStep} style={{ marginLeft: "auto" }}>
                Next Step
              </Button>
            ) : (
              <Button key={curStep} type="submit" style={{ marginLeft: "auto" }}>
                Confirm
              </Button>
            )}
          </ActionsContainer>
        </Form>
      </FormProvider>
    </>
  );
};

export default StepsForm;
