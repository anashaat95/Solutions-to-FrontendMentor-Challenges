import PropTypes from "prop-types";
import Link from "../../elements/Link";
import { navLinks } from "./navLinksList";

const NavLinks = ({ fntSize = "1.6rem", fcolor = undefined, hoverColor = undefined }) => {
  return (
    <div className="nav-links">
      {navLinks.map((item) => (
        <Link href={item.href} key={item.href} fontSize={fntSize} color={fcolor} hoverColor={hoverColor}>
          <>{item.title}</>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

NavLinks.propTypes = {
  fntSize: PropTypes.string,
  fcolor: PropTypes.string,
  hoverColor: PropTypes.string,
};
