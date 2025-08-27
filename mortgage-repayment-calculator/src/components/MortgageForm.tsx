import styled from "styled-components";
import ClearBtn from "../elements/ClearBtn.tsx";
import FormGroup from "../elements/FormGroup.tsx";

import { useForm } from "react-hook-form";
import { useRepaymentsContext } from "../contexts/RepaymentsContext.tsx";
import CalculateBtn from "../elements/CalculateBtn.tsx";
import InputGroup from "../elements/InputGroup.tsx";
import { eMortgageType, FormValues } from "../types/formTypes";

const Form = styled.form`
  background: #fff;
  min-width: 45rem;
  max-width: 50%;
  padding: ${({ theme }) => theme.spaceXL};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaceXL};

  margin: 0 auto;

  @media screen and (max-width: 500px) {
    min-width: 100vw;
  }
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spaceLg};

  h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.slate900};
  }
`;

const Row = styled.div`
  display: flex;

  width: 100%;
  gap: 2rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const MortgageForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      amount: 300000,
      term: 25,
      rate: 5.25,
      type: eMortgageType.repayment,
    },
    mode: "onChange",
  });

  const { setRepaymentValues } = useRepaymentsContext();

  const onSubmit = (data: any) => {
    setRepaymentValues(data);
  };

  const watchType = watch("type");

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader>
        <h2>Mortgage Calculator</h2>
        <ClearBtn type="button" onClick={() => reset()}>
          Clear All
        </ClearBtn>
      </FormHeader>

      <Row>
        <FormGroup>
          <FormGroup.Label htmlFor="amount">Mortgage Amount</FormGroup.Label>
          <FormGroup.InputGroup err={errors?.amount}>
            <InputGroup.Prefix>£</InputGroup.Prefix>
            <InputGroup.Input
              {...register("amount", { required: "This field is required", min: { value: 0.1, message: "The minimum value is 1" } })}
              type="number"
              name="amount"
              id="amount"
              min="1"
              step="0.01"
            />
          </FormGroup.InputGroup>
        </FormGroup>
      </Row>

      <Row>
        <FormGroup>
          <FormGroup.Label htmlFor="term">Mortgage Term</FormGroup.Label>
          <FormGroup.InputGroup err={errors?.term}>
            <FormGroup.InputGroup.Suffix>years</FormGroup.InputGroup.Suffix>
            <FormGroup.InputGroup.Input
              {...register("term", { required: "This field is required", min: { value: 1, message: "The minimum value is 1" } })}
              type="number"
              name="term"
              id="term"
              min="1"
              step="0.01"
            />
          </FormGroup.InputGroup>
        </FormGroup>

        <FormGroup>
          <FormGroup.Label htmlFor="rate">Interest Rate</FormGroup.Label>
          <FormGroup.InputGroup err={errors?.rate}>
            <FormGroup.InputGroup.Suffix>%</FormGroup.InputGroup.Suffix>
            <FormGroup.InputGroup.Input
              {...register("rate", { required: "This field is required", min: { value: 1, message: "The minimum value is 1" } })}
              type="number"
              name="rate"
              id="rate"
              min="1"
              step="0.01"
            />
          </FormGroup.InputGroup>
        </FormGroup>
      </Row>
      <Row>
        <FormGroup>
          <FormGroup.Label>Mortgage Type</FormGroup.Label>
          <FormGroup.RadioGroup>
            <FormGroup.RadioGroup.Label active={+watchType === +eMortgageType.repayment}>
              <FormGroup.RadioGroup.Input
                {...register("type", { required: "This field is required" })}
                value={eMortgageType.repayment}
                type="radio"
                active={+watchType === +eMortgageType.repayment}
                checked={+watchType === +eMortgageType.repayment}
              />
              Repayment
            </FormGroup.RadioGroup.Label>
            <FormGroup.RadioGroup.Label active={+watchType === +eMortgageType.interest}>
              <FormGroup.RadioGroup.Input
                {...register("type", { required: "This field is required" })}
                value={eMortgageType.interest}
                type="radio"
                active={+watchType === +eMortgageType.interest}
                checked={+watchType === +eMortgageType.interest}
              />
              Interest Only
            </FormGroup.RadioGroup.Label>
          </FormGroup.RadioGroup>
        </FormGroup>
      </Row>

      <CalculateBtn />
    </Form>
  );
};

export default MortgageForm;
