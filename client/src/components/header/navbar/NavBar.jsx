import { Link } from "react-router-dom";
import { navConfig } from "../../../config";
import { PiDotsThreeBold } from "react-icons/pi";
import { useRef, useState } from "react";
import useOutsideClick from "../../../utils/hooks/useOutsideClick";
import { ROUTER } from "../../../router/router";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [dotsOpen, setDotsOpen] = useState(false);
  const dotsRef = useRef(null);

  const {
    i18n: { language },
  } = useTranslation();

  useOutsideClick(dotsRef, () => {
    if (dotsOpen) {
      setDotsOpen(false);
    }
  });
  return (
    <>
      <ul className="header-inner-nav">
        {navConfig.map((link) => {
          if (link.id === 5 || link.id === 6) return;
          return (
            <Link
              className="header-inner-nav-link"
              key={link.id}
              to={link.link}
            >
              {link.title[language]}
            </Link>
          );
        })}
        <div
          className="header-inner-dots"
          onClick={() => setDotsOpen((prev) => !prev)}
          ref={dotsRef}
        >
          <PiDotsThreeBold className="header-inner-dots-icon" />
          {dotsOpen && (
            <div className="header-inner-dots-dialog">
              <Link
                className="header-inner-dots-dialog-item"
                to={ROUTER.ABOUTUS_PAGE_ROUTE}
              >
                {navConfig[4].title[language]}
              </Link>
              <Link
                className="header-inner-dots-dialog-item"
                to={ROUTER.CONTACTUS_PAGE_ROUTE}
              >
                {navConfig[5].title[language]}
              </Link>
            </div>
          )}
        </div>
      </ul>
    </>
  );
};

export default NavBar;
