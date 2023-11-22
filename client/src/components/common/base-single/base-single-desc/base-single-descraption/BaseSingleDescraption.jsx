import "../base-single-features/BaseSingleFeatures.scss";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const BaseSingleDescraption = ({ description }) => {
  const [descraptionOpen, setDescraptionOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="descraption">
      <div
        className="descraption-select"
        onClick={() => setDescraptionOpen((prev) => !prev)}
      >
        <div className="descraption-select-text">{t("descraption.title")}</div>
        <div className="descraption-select-icon">
          <IoIosArrowDown
            className="descraption-select-icon-icn"
            style={{
              transform: descraptionOpen ? "rotate(-180deg)" : "",
              transition: "all 0.3s linear",
            }}
          />
        </div>
      </div>
      <div
        className="descraption-text"
        style={{
          display: descraptionOpen ? "block" : "none",
        }}
      >
        {description}
      </div>
    </div>
  );
};

export default BaseSingleDescraption;
