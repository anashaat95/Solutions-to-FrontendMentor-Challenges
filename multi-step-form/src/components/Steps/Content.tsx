import React, { useContext } from "react";
import styled from "styled-components";
import StepsContext from "../../contexts/StepsContext.tsx";
import StepsForm from "../Forms/FormContainer.tsx";
import ThankYou from "../ThankYou/ThankYou.tsx";

const Container = styled.section`
  padding: 1.2rem 2rem;
  overflow: hidden;
  border-radius: 2rem;

  h1 {
    margin: 18px 0 8px;
    font-size: 3.6rem;
    line-height: 1.1;
  }

  p {
    font-size: 1.4rem;
    color: var(--muted);
    margin-bottom: 2.8rem;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 2.8rem;
    }

    height: 60vh;
  }
`;

const Content: React.FC = () => {
  const { curStep } = useContext(StepsContext);

  return <Container className="content">{curStep > 4 ? <ThankYou /> : <StepsForm />}</Container>;
};

export default Content;
