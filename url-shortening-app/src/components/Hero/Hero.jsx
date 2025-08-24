import styled from "styled-components";
import { GetStartedButton } from "../../elements/Button";
import flexCenter from "./../../elements/flexCenter";
import IllustrationWorking from "/images/illustration-working.svg";

const Container = styled.section`
  margin-bottom: 10rem;
  background-color: white;
  position: relative;
  padding: 0 0 0 var(--side-padding);

  ${flexCenter}

  div {
    margin-right: 2rem;
  }

  h1 {
    font-size: 6rem;
    font-weight: 700;

    line-height: 1.1;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 5rem;
    }
  }

  p {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.5;
    margin: 1rem 0 3rem 0;
    color: var(--primary-color-lighter);
  }

  img {
    transform: translateX(10%);
    width: 50%;
  }

  @media (max-width: 600px) {
    & {
      flex-direction: column;
      text-align: center;
      padding-bottom: 4rem;
    }

    img {
      order: 1;
      width: 75%;
      transform: translateX(0);
      margin-bottom: 4rem;
    }

    div {
      order: 2;
    }
  }
`;

const Hero = () => {
  return (
    <Container className="hero">
      <div>
        <h1>More than just shorter links</h1>
        <p>Build your brand&apos;s recognition and get detailed insights on how your links are performing.</p>
        <GetStartedButton />
      </div>
      <img src={IllustrationWorking} alt="Illustration Working" />
    </Container>
  );
};

export default Hero;
