import styled from "styled-components";
import flexCenter from "../../elements/flexCenter";
import ActionLinks from "./ActionLinks";
import NavLinks from "./NavLinks";

const Container = styled.div`
  ${flexCenter}
  width:100%;
  justify-content: space-between;

  .nav-links {
    ${flexCenter}
    gap: 2rem;
  }

  .actions {
    ${flexCenter}
    gap: 2rem;
    margin-right: 0;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const DesktopMenu = () => {
  return (
    <Container className="desktop-menu">
      <NavLinks />
      <ActionLinks />
    </Container>
  );
};

export default DesktopMenu;
