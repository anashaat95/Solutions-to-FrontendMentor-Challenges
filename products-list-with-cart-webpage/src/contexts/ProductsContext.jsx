import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { products as prods } from "./products";
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(prods);
  }, []);

  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};

ProductsProvider.propTypes = {
  children: PropTypes.any,
};
