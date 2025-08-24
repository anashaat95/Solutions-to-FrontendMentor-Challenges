import { useContext } from "react";
import styled from "styled-components";
import LinksContext from "../../contexts/LinksContext";
import flexCenter from "../../elements/flexCenter";
import ShortenedLink from "./ShortenedLink";

const Container = styled.section`
  background-color: var(--bg-color-light);

  ${flexCenter}
  flex-direction:column;
  align-items: normal;
  gap: 2rem;

  padding: 0 var(--side-padding);
  padding-top: 10rem;

  @media (max-width: 600px) {
    & {
      padding-top: 16rem;
    }
  }
`;

const ShortenedLinks = () => {
  const { links } = useContext(LinksContext);
  if (links.length === 0) return null;

  return (
    <Container className="shortening">
      {links.map((item) => (
        <ShortenedLink key={item.original} originalLink={item.original} shortenedLink={item.shortened} />
      ))}
    </Container>
  );
};

export default ShortenedLinks;
