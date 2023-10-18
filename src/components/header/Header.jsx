//Scss
import "./Header.scss";
//Components
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { ROUTER } from "../../router/router";
import NavBar from "./navbar/NavBar";
import Logo from "../../images/logo .svg";
import BasketCart from "./basketcart/BasketCart";
import Langs from "./langs/Langs";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header-inner">
          <NavBar />
          <Link className="header-inner-logo" to={ROUTER.HOME_PAGE_ROUTE}>
            <img src={Logo} alt="logo" className="header-inner-logo-img" />
          </Link>
          <BasketCart />
          <Langs />
        </div>
      </Container>
    </header>
  );
};

export default Header;
