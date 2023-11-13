import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { langs } from "../../../config";
import { changeLanguage } from "i18next";

const Langs = () => {
  const [langDialogOpen, setLangDialogOpen] = useState(false);
  const [activeLang, setActiveLang] = useState(langs[0]);

  return (
    <>
      <div className="header-inner-language">
        <div
          className="header-inner-language-lang"
          onClick={() => setLangDialogOpen((prev) => !prev)}
        >
          {activeLang.title}
          <IoIosArrowDown
            className="header-inner-language-lang-icon"
            style={{
              transform: langDialogOpen ? "rotate(180deg)" : "",
            }}
          />
        </div>

        {langDialogOpen && (
          <div className="header-inner-language-dialog">
            {langs.map(({ id, title, type }) => {
              return (
                <div
                  className="header-inner-language-dialog-item"
                  key={id}
                  onClick={() => {
                    setActiveLang({ id, title });
                    setLangDialogOpen(false);
                    changeLanguage(type);
                  }}
                  style={{
                    display: activeLang.id === id ? "none" : "block",
                  }}
                >
                  {title}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Langs;
