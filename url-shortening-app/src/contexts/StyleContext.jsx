import PropTypes from "prop-types";
import { createContext, useState } from "react";

const StyleContext = createContext();

export const StyleContextProvider = ({ children }) => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openOverlay = () => setOverlayOpen(true);
  const closeOverlay = () => setOverlayOpen(false);

  return (
    <StyleContext.Provider value={{ isOverlayOpen, isMobileMenuOpen, openOverlay, closeOverlay, setMobileMenuOpen }}>
      {children}
    </StyleContext.Provider>
  );
};

export default StyleContext;

StyleContextProvider.propTypes = {
  children: PropTypes.any,
};
