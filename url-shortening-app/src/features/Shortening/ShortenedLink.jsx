import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import { CopyButton } from "../../elements/Button";
import flexCenter from "../../elements/flexCenter";
import Link from "../../elements/Link";

const LinkContainer = styled.section`
  background-color: white;
  padding: 1.2rem 2rem;
  border-radius: 0.5rem;

  ${flexCenter}
  justify-content:start;
  gap: 2rem;

  .original-link {
    margin-right: auto;
    flex-shrink: 1;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 1.2;
  }

  .shortened-link {
    color: var(--secondary-color-dark);
    flex-shrink: 0;
  }

  button {
    flex-shrink: 0;
  }

  @media (max-width: 800px) {
    & {
      flex-direction: column;
    }

    .original-link,
    .shortened-link,
    button {
      width: 100%;
      text-align: center;
    }

    .original-link {
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--primary-color-lighter);
    }
  }
`;

const ShortenedLink = ({ originalLink, shortenedLink }) => {
  const [isCopied, setIsCopied] = useState(false);

  const Copy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(shortenedLink);
  };

  return (
    <LinkContainer>
      <p className="original-link">
        <Link href={originalLink}>
          <>{originalLink}</>
        </Link>
      </p>
      <p className="shortened-link">
        <Link color="var(--secondary-color-dark)" hoverColor="var(--secondary-color-light)">
          <>{shortenedLink}</>
        </Link>
      </p>
      {isCopied ? (
        <CopyButton bgcolor="var(--primary-color-dark)" isfocused={true}>
          <>Copied!</>
        </CopyButton>
      ) : (
        <CopyButton onClick={Copy}>
          <>Copy</>
        </CopyButton>
      )}
    </LinkContainer>
  );
};

export default ShortenedLink;

ShortenedLink.propTypes = {
  originalLink: PropTypes.string,
  shortenedLink: PropTypes.string,
};
