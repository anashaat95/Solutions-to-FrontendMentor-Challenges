import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonContainer = styled.button`
  padding: ${(props) => props.custompadding};
  background: none;
  border: none;
  background-color: var(--secondary-color-dark);
  border-radius: ${(props) => props.borderradius};
  color: white;
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  transition: all 0.2s ease;
  ${(props) => props.width && `width: ${props.width}`};

  &:hover {
    background-color: var(--secondary-color-light);
  }

  ${(props) =>
    props.isfocused === "true" &&
    `&:focus {
      background-color: var(--tertiary-color);
  }`}
`;

const Button = ({
  bgcolor = "var(--secondary-color-dark)",
  isfocused = false,
  onClick,
  children,
  borderradius = "4rem",
  fontSize = "1.4rem",
  custompadding = "1rem 2rem;",
  width = undefined,
}) => {
  return (
    <ButtonContainer
      bgcolor={bgcolor}
      isfocused={isfocused.toString()}
      onClick={onClick}
      borderradius={borderradius}
      fontSize={fontSize}
      custompadding={custompadding}
      width={width}
    >
      {children}
    </ButtonContainer>
  );
};

export const GetStartedButton = () => (
  <Button custompadding="1.6rem 6rem" fontSize="1.8rem">
    <>Get Started</>
  </Button>
);

export const CopyButton = ({ width = "12rem", bgcolor, onClick, children, isfocused = false }) => (
  <Button width={width} bgcolor={bgcolor} onClick={onClick} custompadding="1rem 2rem" borderradius="0.5rem" isfocused={isfocused}>
    {children}
  </Button>
);

export default Button;

Button.propTypes = {
  isfocused: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.object.isRequired,
  borderradius: PropTypes.string,
  fontSize: PropTypes.string,
  custompadding: PropTypes.string,
  bgcolor: PropTypes.string,
  width: PropTypes.string,
};

CopyButton.propTypes = {
  children: PropTypes.object.isRequired,
  bgcolor: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
  isfocused: PropTypes.bool,
};
