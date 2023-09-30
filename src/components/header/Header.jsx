//Scss
import "./Header.scss";
//Components
import { Link } from "react-router-dom";
import { navConfig } from "../../config";
import Container from "../container/Container";
import { SlBasket } from "react-icons/sl";
import { TbCurrencyDram } from "react-icons/tb";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header-inner">
          <ul className="header-inner-nav">
            {navConfig.map((link) => {
              return (
                <Link
                  className="header-inner-nav-link"
                  key={link.id}
                  to={link.link}
                >
                  {link.title.en}
                </Link>
              );
            })}
          </ul>

          <div className="header-inner-logo">
            <img src="" alt="logo" className="header-inner-logo-img" />
          </div>
          <div className="header-inner-buy">
            <div className="header-inner-buy-icon">
              <SlBasket className="header-inner-buy-icon-icn" />
            </div>
            <div className="header-inner-buy-cartName">My cart</div>
            <div className="header-inner-buy-price">
              0<TbCurrencyDram style={{ width: "18px", height: "18px" }} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
