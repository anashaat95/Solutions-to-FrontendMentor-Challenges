import PropTypes from "prop-types";
import { useContext } from "react";
import RemoveBtn from "../../components/removeBtn";
import { CartContext } from "../../contexts/CartContext";
import { formatePrice } from "./../../helpers/formatePrice";
import "./Product-In-Cart.css";

const ProductInCart = ({ prod }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <>
      <div className="cart-product">
        <div className="cart-product--details">
          <h2 className="cart-product--title">{prod.name}</h2>
          <p>
            <span className="cart-product--amount">{prod.qty}x</span>
            <span className="cart-product--price">@ {formatePrice(prod.price)}</span>
            <span className="cart-product--total-price">{formatePrice(prod.qty * prod.price)}</span>
          </p>
        </div>
        <RemoveBtn onClick={() => removeFromCart(prod.id)} />
      </div>
      <hr />
    </>
  );
};

export default ProductInCart;

ProductInCart.propTypes = {
  prod: PropTypes.object.isRequired,
};
