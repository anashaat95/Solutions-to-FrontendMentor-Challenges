import styled from "styled-components";
import { useRepaymentsContext } from "../contexts/RepaymentsContext";
import { Formatter } from "../helpers/Formatter";

const Results = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaceXL};

  color: ${({ theme }) => theme.slate100};

  background: ${({ theme }) => theme.slate900};
  padding: ${({ theme }) => theme.spaceXL};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadiusXXXXL};

  @media screen and (max-width: 768px) {
    border-bottom-left-radius: 0px;
  }

  img {
    width: 16rem;
    height: 16rem;
  }

  h2 {
    color: ${({ theme }) => theme.white};
  }

  p {
    line-height: 1.5;
  }
`;

const NoResults = styled(Results)`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ResultBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: ${({ theme }) => theme.spaceXL};
  margin-top: ${({ theme }) => theme.spaceSM};
  border-radius: ${({ theme }) => theme.borderRadiusSM};
  border-top: 3px solid ${({ theme }) => theme.accent};
  background-color: ${({ theme }) => theme.slate950};

  h3 {
    font-size: 4rem;
    color: ${({ theme }) => theme.accent};
    margin-top: ${({ theme }) => theme.spaceLg};
  }

  h4 {
    font-size: 2rem;
    color: ${({ theme }) => theme.white};
    margin-top: ${({ theme }) => theme.spaceSM};
  }

  hr {
    margin: ${({ theme }) => theme.spaceXL} 0;
    border: 1px solid ${({ theme }) => theme.slate100};
  }
`;

const MortgageResult = () => {
  const { monthlyRepayment, termPayment } = useRepaymentsContext();

  if (+termPayment === 0)
    return (
      <NoResults style={{ justifyItems: "center" }}>
        <img src="/illustration-empty.svg" alt="Calculator Illustration" />
        <h2>Results shown here</h2>
        <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
      </NoResults>
    );

  return (
    <Results>
      <h2>Your results</h2>
      <p>
        Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <ResultBox>
        <div>
          <p>Your monthly repayments</p>
          <h3>{Formatter.formatePrice(+monthlyRepayment)}</h3>
        </div>
        <hr />
        <div>
          <p>Total you'll repay over the term</p>
          <h4>{Formatter.formatePrice(+termPayment)}</h4>
        </div>
      </ResultBox>
    </Results>
  );
};

export default MortgageResult;
