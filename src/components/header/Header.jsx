//Scss
import "./Header.scss";
//Components
import { Link } from "react-router-dom";
import { navConfig } from "../../config";
import Container from "../container/Container";
import { SlBasket } from "react-icons/sl";
import { TbCurrencyDram } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { ROUTER } from "../../router/router";
import NavBar from "./navbar/NavBar";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header-inner">
          <NavBar />

          <Link className="header-inner-logo" to={ROUTER.HOME_PAGE_ROUTE}>
            <img src="" alt="logo" className="header-inner-logo-img" />
          </Link>
          <div className="header-inner-buy">
            <div className="header-inner-buy-icon">
              <SlBasket className="header-inner-buy-icon-icn" />
            </div>
            <div className="header-inner-buy-cartName">My cart</div>
            <div className="header-inner-buy-price">
              0
              <TbCurrencyDram style={{ width: "18px", height: "18px" }} />
            </div>
          </div>

          <div className="header-inner-language">
            <div className="header-inner-language-lang">
              Eng
              <IoIosArrowDown className="header-inner-language-lang-icon" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
