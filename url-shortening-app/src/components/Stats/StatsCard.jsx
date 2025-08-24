import PropTypes from "prop-types";
import styled from "styled-components";
import flexCenter from "../../elements/flexCenter";

const Container = styled.div`
  display: inline-block;
  background-color: white;
  padding: 4rem;
  padding-top: 6rem;
  margin-top: ${(props) => `${props.pos * 8}rem`};
  position: relative;
  z-index: 10;

  .stats--card-image-box {
    ${flexCenter}

    position: absolute;
    background-color: var(--tertiary-color);
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 10rem;

    top: 0;
    left: 0;

    transform: translate(50%, -50%);

    img {
      width: 3.6rem;
      height: auto;
    }
  }

  h3 {
    margin-bottom: 2rem;
    line-height: 1.3;
  }

  p {
    text-align: left !important;
    font-size: 1.4rem;
  }

  @media (max-width: 700px) {
    & {
      padding: 1rem;
      padding-top: 6rem;
      gap: 1rem;
    }
  }

  @media (max-width: 600px) {
    & {
      padding: 4rem;
      padding-top: 6rem;
      text-align: center;
      margin-top: 8rem;
    }

    .stats--card-image-box {
      left: 50%;
      transform: translate(-50%, -50%);
    }

    p {
      text-align: center !important;
    }
  }
`;

const StatsCard = ({ pos, image, title, description }) => {
  return (
    <Container pos={pos} className="stats--card">
      <div className="stats--card-image-box">
        <img className="stats--card-image" src={image} alt={title} />
      </div>
      <h3 className="stats--card-title">{title}</h3>
      <p className="stats--card-description">{description}</p>
    </Container>
  );
};

export default StatsCard;

StatsCard.propTypes = {
  pos: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
