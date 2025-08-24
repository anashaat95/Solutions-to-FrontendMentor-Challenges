import { useContext } from "react";
import { CartContext } from "./../../contexts/CartContext";
import "./Cart.css";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

const Cart = () => {
  const { cartTotalItems } = useContext(CartContext);

  return (
    <aside className="cart">
      <h2 className="cart--title">Your Cart ({cartTotalItems})</h2>
      {cartTotalItems > 0 ? <FilledCart /> : <EmptyCart />}
    </aside>
  );
};

export default Cart;
