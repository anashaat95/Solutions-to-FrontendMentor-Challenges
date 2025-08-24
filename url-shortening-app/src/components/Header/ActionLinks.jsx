import PropTypes from "prop-types";
import Button from "../../elements/Button";
import Link from "../../elements/Link";

const ActionLinks = ({ fntSize = "1.6rem", fcolor = undefined, hoverColor = undefined, width = undefined }) => {
  return (
    <div className="actions">
      <Link href="#login" fontSize={fntSize} color={fcolor} hoverColor={hoverColor}>
        <>Login</>
      </Link>
      <Button fontSize={fntSize} width={width}>
        <>Sign Up</>
      </Button>
    </div>
  );
};

export default ActionLinks;

ActionLinks.propTypes = {
  fntSize: PropTypes.string,
  fcolor: PropTypes.string,
  hoverColor: PropTypes.string,
  width: PropTypes.string,
};
