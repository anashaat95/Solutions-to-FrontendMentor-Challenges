import PropTypes from "prop-types";
import styled from "styled-components";

const LinkContainer = styled.a`
  background: none;
  border: none;
  text-decoration: none;
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color} !important;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  cursor: pointer;
  transition: all 0.2s ease;
  line-height: 1.2;

  &:hover {
    color: ${(props) => props.hoverColor} !important;
  }

  &:hover svg {
    fill: var(--secondary-color-dark);
  }
`;

const Link = ({
  onClick,
  children,
  fontSize = "1.4rem",
  fontWeight = "700",
  href = "#",
  color = `var(--primary-color-lighter)`,
  hoverColor = `var(--primary-color-dark)`,
}) => {
  return (
    <LinkContainer href={href} onClick={onClick} fontSize={fontSize} fontWeight={fontWeight} color={color} hoverColor={hoverColor}>
      {children}
    </LinkContainer>
  );
};

export default Link;

Link.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.object.isRequired,
  fontSize: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  hoverColor: PropTypes.string,
};
