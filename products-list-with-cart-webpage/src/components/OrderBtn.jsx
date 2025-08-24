import PropTypes from "prop-types";
import "./OrderBtn.css";

const OrderBtn = ({ children, onClick = () => {} }) => {
  return (
    <button className="btn btn--confirm" onClick={onClick}>
      {children}
    </button>
  );
};

export default OrderBtn;

OrderBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
};
