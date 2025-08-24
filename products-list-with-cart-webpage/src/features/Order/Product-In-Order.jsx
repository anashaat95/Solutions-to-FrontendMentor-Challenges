import PropTypes from "prop-types";
import { formatePrice } from "../../helpers/formatePrice";

const ProductInOrder = ({ prod }) => {
  return (
    <>
      <div className="order-product">
        <div className="order-product--details">
          <img className="order-product--image" src={prod.image.thumbnail} alt={prod.name} />
          <div className="order-product--data">
            <h2 className="order-product--title">{prod.name}</h2>
            <p>
              <span className="order-product--amount">{prod.qty}x</span>
              <span className="order-product--price">@ {formatePrice(prod.price)}</span>
            </p>
          </div>
        </div>
        <p className="order-product--total-price">{formatePrice(prod.qty * prod.price)}</p>
      </div>
      <hr />
    </>
  );
};

export default ProductInOrder;

ProductInOrder.propTypes = {
  prod: PropTypes.object.isRequired,
};
