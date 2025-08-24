import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const open = () => setShowOverlay(true);
  const close = () => setShowOverlay(false);
  return <StyleContext.Provider value={{ showOverlay, open, close }}>{children}</StyleContext.Provider>;
};

StyleProvider.propTypes = {
  children: PropTypes.any,
};
