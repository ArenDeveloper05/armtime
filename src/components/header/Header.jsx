//Scss
import "./Header.scss";
//Components
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { SlBasket } from "react-icons/sl";
import { TbCurrencyDram } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { ROUTER } from "../../router/router";
import NavBar from "./navbar/NavBar";
import Logo from "../../images/logo .svg";
import { useState } from "react";

const Header = () => {
  const [activeLang, setActiveLang] = useState("Eng");
  const [langs, setLangs] = useState(["Eng", "Rus", "Arm"]);
  const [langDialogOpen, setLangDialogOpen] = useState(false);

  return (
    <header>
      <Container>
        <div className="header-inner">
          <NavBar />

          <Link className="header-inner-logo" to={ROUTER.HOME_PAGE_ROUTE}>
            <img src={Logo} alt="logo" className="header-inner-logo-img" />
          </Link>
          <div className="header-inner-buy">
            <div className="header-inner-buy-inner">
              <div className="header-inner-buy-inner-icon">
                <SlBasket className="header-inner-buy-inner-icon-icn" />
              </div>
              <div className="header-inner-buy-inner-cartName">My cart</div>
              <div className="header-inner-buy-inner-price">
                0
                <TbCurrencyDram style={{ width: "18px", height: "18px" }} />
              </div>
            </div>
          </div>

          <div className="header-inner-language">
            <div
              className="header-inner-language-lang"
              onClick={() => setLangDialogOpen(!langDialogOpen)}
            >
              {activeLang}
              <IoIosArrowDown
                className="header-inner-language-lang-icon"
                style={{
                  transform: langDialogOpen ? "rotate(180deg)" : "",
                }}
              />
            </div>
            {langDialogOpen && (
              <div className="header-inner-language-dialog">
                {langs.map((lang) => {
                  if (lang !== activeLang) {
                    return (
                      <div
                        className="header-inner-language-dialog-item"
                        onClick={() => {
                          setActiveLang(lang);
                          setLangDialogOpen(false);
                        }}
                      >
                        {lang}
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
