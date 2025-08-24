import PropTypes from "prop-types";
import "./RemoveBtn.css";

const RemoveBtn = ({ onClick = () => {} }) => {
  return (
    <button className="btn btn--remove" onClick={onClick}>
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
        <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
      </svg>
    </button>
  );
};

export default RemoveBtn;

RemoveBtn.propTypes = {
  onClick: PropTypes.func,
};
