import { useContext } from "react";
import styled from "styled-components";
import StyleContext from "../../contexts/StyleContext";
import flexCenter from "../../elements/flexCenter";
import Logo from "../../elements/Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import MobileMenuIcon from "./MobileMenuIcon";

const HeaderContainer = styled.header`
  position: relative;
  background-color: white;
  margin: 4rem 0;
  padding: 0 var(--side-padding);

  ${flexCenter}
  justify-content: start;
  gap: 4rem;
`;

const Header = () => {
  const { isOverlayOpen, isMobileMenuOpen, setMobileMenuOpen } = useContext(StyleContext);

  return (
    <>
      <HeaderContainer className="header">
        <Logo />
        <DesktopMenu />
        {isOverlayOpen && isMobileMenuOpen && <MobileMenu />}
      </HeaderContainer>
      <MobileMenuIcon isOpenMenu={isMobileMenuOpen} setOpenMenu={setMobileMenuOpen} />
    </>
  );
};

export default Header;
