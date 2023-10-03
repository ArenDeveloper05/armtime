import { Link } from "react-router-dom";
import { navConfig } from "../../../config";

const NavBar = () => {
  return (
    <ul className="header-inner-nav">
      {navConfig.map((link) => {
        return (
          <Link className="header-inner-nav-link" key={link.id} to={link.link}>
            {link.title.en}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavBar;
