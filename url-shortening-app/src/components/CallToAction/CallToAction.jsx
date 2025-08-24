import styled from "styled-components";
import { GetStartedButton } from "../../elements/Button";
import flexCenter from "../../elements/flexCenter";

const Container = styled.section`
  background: url("/images/bg-boost-desktop.svg") var(--tertiary-color);
  background-size: cover;
  background-position: center;
  padding: 4rem var(--side-padding);

  ${flexCenter}
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 3.2rem;
    color: white;
    text-align: center;
    line-height: 1.2;
  }
`;

const CallToAction = () => {
  return (
    <Container className="call-to-action">
      <h2>Boost your links today</h2>
      <GetStartedButton />
    </Container>
  );
};

export default CallToAction;
