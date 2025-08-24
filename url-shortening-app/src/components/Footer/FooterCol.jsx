import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "../../elements/Link";
import flexCenter from "../../elements/flexCenter";

const Container = styled.div`
  .sub-links {
    & > :first-child {
      margin-top: 3rem;
    }

    ${flexCenter}
    flex-direction:column;
    align-items: start;
    gap: 2rem;
  }

  @media (max-width: 700px) {
    & {
      text-align: center;
    }
    .sub-links {
      & > :first-child {
        margin-top: 2rem;
      }

      align-items: center;
      gap: 1rem;
    }
  }
`;

const FooterCol = ({ headerLink = "", subLinks = [] }) => {
  return (
    <Container className="footer-links-col">
      <Link className="top-link" fontSize="1.8rem" color="white" hoverColor="var(--secondary-color-light)">
        <>{headerLink}</>
      </Link>
      <div className="sub-links">
        {subLinks.map((lnk) => (
          <Link key={lnk} fontSize="1.6rem" fontWeight="400" color="var(--primary-color-lighter)" hoverColor="var(--secondary-color-light)">
            <> {lnk}</>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default FooterCol;

FooterCol.propTypes = {
  headerLink: PropTypes.string,
  subLinks: PropTypes.array,
};
