import styled from "styled-components";
import flexCenter from "../../elements/flexCenter";
import StatsCard from "./StatsCard";
import { statsCards } from "./statsCards";

const Container = styled.section`
  padding: 12rem var(--side-padding);
  background-color: var(--bg-color-light);

  ${flexCenter}
  justify-content:start;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 3.2rem;
    text-align: center;
    line-height: 1.2;
  }

  p {
    text-align: center;
    color: var(--primary-color-lighter);
    line-height: 1.5;
  }

  hr {
    position: absolute;
    border: 0.5rem solid var(--secondary-color-dark);
    width: calc(100% - 16rem * 2);
    top: 50%;
    z-index: 1;
  }

  @media (max-width: 600px) {
    hr {
      transform: rotate(90deg);
      width: 60rem;
    }
  }
`;

const CardsContainer = styled.div`
  position: relative;
  ${flexCenter}
  gap: 4rem;

  @media (max-width: 700px) {
    & {
      gap: 2rem;
    }
  }

  @media (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`;

const Stats = () => {
  return (
    <Container className="stats">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with
        <br />
        our advanced statistics dashboard.
      </p>
      <CardsContainer className="stats--cards">
        {statsCards.map((card, i) => (
          <StatsCard key={card.title} pos={i} title={card.title} image={card.image} description={card.description} />
        ))}
        <hr />
      </CardsContainer>
    </Container>
  );
};

export default Stats;
