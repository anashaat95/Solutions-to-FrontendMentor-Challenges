import PropTypes from "prop-types";
import { useContext } from "react";
import ReactDOM from "react-dom";
import { StyleContext } from "../contexts/StyleContext";
import "./Overlay.css";

const Overlay = ({ onClick, children }) => {
  const { showOverlay, close } = useContext(StyleContext);
  if (!showOverlay) return null;

  return ReactDOM.createPortal(
    <div className="overlay" onClick={onClick ? onClick() : () => close()}>
      {children}
    </div>,
    document.getElementById("overlay-root")
  );
};

export default Overlay;

Overlay.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
};
