//Scss
import "./Header.scss";
//Components
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { IoIosArrowDown } from "react-icons/io";
import { ROUTER } from "../../router/router";
import NavBar from "./navbar/NavBar";
import Logo from "../../images/logo .svg";
import { useState } from "react";
import BasketCart from "./basketcart/BasketCart";

const Header = () => {
  const [activeLang, setActiveLang] = useState("Eng");
  const [langs] = useState(["Eng", "Rus", "Arm"]);
  const [langDialogOpen, setLangDialogOpen] = useState(false);

  return (
    <header>
      <Container>
        <div className="header-inner">
          <NavBar />

          <Link className="header-inner-logo" to={ROUTER.HOME_PAGE_ROUTE}>
            <img src={Logo} alt="logo" className="header-inner-logo-img" />
          </Link>

          <BasketCart />

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
                  } else {
                    return "";
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
