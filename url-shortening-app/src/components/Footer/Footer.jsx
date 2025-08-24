import styled from "styled-components";
import flexCenter from "../../elements/flexCenter";
import Logo from "../../elements/Logo";
import FooterCol from "./FooterCol";
import SocialLinks from "./SocialLinks";

const Container = styled.footer`
  background-color: var(--primary-color-dark);
  padding: 8rem var(--side-padding);

  ${flexCenter}
  justify-content: space-between;
  align-items: start;
  gap: 8rem;

  .footer--right-col {
    ${flexCenter}
    align-items:start;
    gap: 8rem;
  }

  @media (max-width: 1000px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 700px) {
    .footer--right-col {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Footer = () => {
  return (
    <Container className="footer">
      <div className="logo-box">
        <Logo color="white" />
      </div>
      <div className="footer--right-col">
        <FooterCol headerLink="Features" subLinks={["Link Shortening", "Branded Links", "Analytics"]} />
        <FooterCol headerLink="Resources" subLinks={["Blog", "Developers", "Support"]} />
        <FooterCol headerLink="Company" subLinks={["About", "Our Team", "Careers", "Contact"]} />
        <SocialLinks />
      </div>
    </Container>
  );
};

export default Footer;
