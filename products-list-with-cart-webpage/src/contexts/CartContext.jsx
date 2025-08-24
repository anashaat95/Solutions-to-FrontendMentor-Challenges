import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (prod) => {
    setCart((prevCart) => {
      const exists = prevCart.find((p) => p.id === prod.id);
      if (exists) {
        return prevCart.map((p) => (p.id === prod.id ? { ...prod, qty: p.qty + 1 } : p));
      } else {
        return [...prevCart, { ...prod, qty: 1 }];
      }
    });
  };

  const DecreaseQuantityFromCart = (prod) => {
    setCart((prevCart) => {
      const exists = prevCart.find((p) => p.id === prod.id);
      if (exists) {
        return prevCart.map((p) => (p.id === prod.id ? { ...prod, qty: p.qty - 1 } : p));
      } else {
        return [...prevCart, { ...prod, qty: 0 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartTotalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, DecreaseQuantityFromCart, removeFromCart, clearCart, cartTotalPrice, cartTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.any,
};
