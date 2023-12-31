import { Link } from "react-router-dom";
import { navConfig } from "../../../../config";
import { useTranslation } from "react-i18next";

const MobileNavBar = () => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <ul className="menu-modal-links">
      {navConfig &&
        navConfig.map((item) => {
          return (
            <Link
              key={item.id}
              to={item.link}
              className="menu-modal-links-link"
            >
              <item.icon style={{ fontSize: "22px" }} /> {item.title[language]}
            </Link>
          );
        })}
    </ul>
  );
};

export default MobileNavBar;
