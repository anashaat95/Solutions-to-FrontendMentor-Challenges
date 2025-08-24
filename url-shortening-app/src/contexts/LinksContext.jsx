import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const LinksContext = createContext();

export const LinksContextProvider = ({ children }) => {
  const [links, setLinks] = useState([]);

  const addLink = (link) => {
    setLinks((prevLinks) => [...prevLinks, link]);
    localStorage.setItem("LINKS", JSON.stringify([...links, link]));
  };

  useEffect(() => {
    const links = JSON.parse(localStorage.getItem("LINKS")) || [];
    setLinks(links);
  }, []);

  return <LinksContext.Provider value={{ links, addLink }}>{children}</LinksContext.Provider>;
};

export default LinksContext;

LinksContextProvider.propTypes = {
  children: PropTypes.any,
};
