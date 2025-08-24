import styled from "styled-components";
import flexCenter from "../../elements/flexCenter";
import ActionLinks from "./ActionLinks";
import NavLinks from "./NavLinks";

const Container = styled.div`
  position: absolute;
  top: 4rem;
  right: 3rem;

  width: 80vw;
  height: auto;

  padding: 4rem;
  border-radius: 1rem;
  background-color: var(--tertiary-color);
  z-index: 1000;

  ${flexCenter}
  flex-direction: column;

  .nav-links {
    ${flexCenter}
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 2rem;
  }

  .actions {
    width: 100%;
    ${flexCenter}
    flex-direction: column;
    gap: 2rem;
    margin-right: 0;
    font-size: inherit;

    border-top: 1px solid var(--primary-color-lighter);
    padding-top: 2rem;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

const MobileMenu = () => {
  const fntSize = "2rem";
  const fColor = "white";
  const hoverColor = "var(--secondary-color-light)";

  return (
    <Container className="mobile-menu">
      <NavLinks fntSize={fntSize} fcolor={fColor} hoverColor={hoverColor} />
      <ActionLinks fntSize={fntSize} fcolor={fColor} hoverColor={hoverColor} width="100%" />
    </Container>
  );
};

export default MobileMenu;
