import PropTypes from "prop-types";
import { useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import StyleContext from "../contexts/StyleContext";
import flexCenter from "./../elements/flexCenter";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: -4rem;
  left: 0;
  width: 100vw;
  height: 100%;
  ${flexCenter}
  z-index:10;

  cursor: pointer;
`;

const Overlay = ({ children }) => {
  const { isOverlayOpen, closeOverlay } = useContext(StyleContext);

  return ReactDOM.createPortal(
    isOverlayOpen ? (
      <Container className="overlay" onClick={closeOverlay}>
        {children}
      </Container>
    ) : null,
    document.getElementById("overlay-root")
  );
};

export default Overlay;

Overlay.propTypes = {
  children: PropTypes.any,
};
