import { useContext } from "react";
import styled from "styled-components";
import StyleContext from "../../contexts/StyleContext";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
  width: 3rem;
  height: 3rem;

  svg {
    height: 100%;
    width: 100%;
    stroke: var(--primary-color-lighter);
    stroke-width: 3px;
    cursor: pointer;
    display: none;

    &:hover {
      stroke: var(--secondary-color-dark);
    }
  }

  @media (max-width: 700px) {
    svg {
      display: block;
    }
  }
`;

const MobileMenuIcon = () => {
  const { openOverlay, setMobileMenuOpen } = useContext(StyleContext);

  return (
    <Container
      className="mobile-menu-icon"
      onClick={() => {
        openOverlay();
        setMobileMenuOpen(true);
      }}
    >
      <svg>
        <path d="M5 6H12H19M5 12H19M5 18H19" />
      </svg>
    </Container>
  );
};

export default MobileMenuIcon;
