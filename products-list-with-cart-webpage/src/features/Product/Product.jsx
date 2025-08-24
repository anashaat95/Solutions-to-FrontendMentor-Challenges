import PropTypes from "prop-types";
import { useContext } from "react";
import AddToCart from "./../../components/AddToCart";
import { DecrementButton, IncrementButton } from "./../../components/ChangeQauntityButton";
import { CartContext } from "./../../contexts/CartContext";
import { formatePrice } from "./../../helpers/formatePrice";
import "./Product.css";

const Product = ({ prod }) => {
  const { cart, addToCart, DecreaseQuantityFromCart } = useContext(CartContext);
  const qty = cart.find((p) => p.id === prod.id)?.qty;

  return (
    <div className="product">
      <div className="product--header">
        <picture>
          <source srcSet={prod.image.mobile} media="(max-width:375px)" />
          <source srcSet={prod.image.tablet} media="(max-width:720px)" />
          <img className="product--image" src={prod.image.desktop} alt={prod.name} />
        </picture>
        {!qty || qty <= 0 ? (
          <AddToCart onClick={() => addToCart(prod)} />
        ) : (
          <div className="product--added-to-cart">
            <DecrementButton onClick={() => DecreaseQuantityFromCart(prod)} />
            <p className="product--added-qty">{qty}</p>
            <IncrementButton onClick={() => addToCart(prod)} />
          </div>
        )}
      </div>
      <div className="product--details">
        <p className="product--tag">{prod.category}</p>
        <h2 className="product--title">{prod.name}</h2>
        <p className="product--price">{formatePrice(prod.price)}</p>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  prod: PropTypes.object.isRequired,
};
