import styled from "styled-components";
import flexCenter from "../../elements/flexCenter";
import ShorteningForm from "./ShorteningForm";

const Container = styled.section`
  margin: 0 var(--side-padding);
  width: calc(100% - var(--side-padding) * 2);

  padding: 4rem 0;
  border-radius: 1rem;
  background-color: var(--tertiary-color);
  position: absolute;
  transform: translateY(-50%);

  background: url("/images/bg-shorten-desktop.svg") no-repeat, var(--tertiary-color);
  background-size: cover;
  background-position: center;

  ${flexCenter}

  @media (max-width: 500px) {
    & {
      background: url("/images/bg-shorten-mobile.svg") no-repeat, var(--tertiary-color);
    }
  }
`;

const Shortening = () => {
  return (
    <Container className="shortening">
      <ShorteningForm />
    </Container>
  );
};

export default Shortening;
