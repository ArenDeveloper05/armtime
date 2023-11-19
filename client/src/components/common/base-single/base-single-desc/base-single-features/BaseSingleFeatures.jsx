import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import "./BaseSingleFeatures.scss";
import { useTranslation } from "react-i18next";

const BaseSingleFeatures = ({ featuresData }) => {
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const { t } = useTranslation();

  function checkValidations(value) {
    return value ? value : "";
  }

  return (
    <div className="features">
      <div
        className="features-select"
        onClick={() => setFeaturesOpen((prev) => !prev)}
      >
        <div className="features-select-text">{t("features.title")}</div>
        <div className="features-select-icon">
          <IoIosArrowDown
            className="features-select-icon-icn"
            style={{
              transform: featuresOpen ? "rotate(-180deg)" : "",
              transition: "all 0.3s linear",
            }}
          />
        </div>
      </div>

      <div
        className="features-info"
        style={{
          display: featuresOpen ? "flex" : "none",
        }}
      >
        <div className="features-info-block">
          <div className="features-info-block-type">{t("features.gender")}</div>
          <div className="features-info-block-name">
            {featuresData && checkValidations(featuresData.sex)}
          </div>
        </div>

        <div className="features-info-block">
          <div className="features-info-block-type">
            {t("features.movement_type")}
          </div>
          <div className="features-info-block-name">
            {featuresData && checkValidations(featuresData.type)}
          </div>
        </div>

        <div className="features-info-block">
          <div className="features-info-block-type">
            {t("features.case_material")}
          </div>
          <div className="features-info-block-name">
            {featuresData && checkValidations(featuresData.case_material)}
          </div>
        </div>

        <div className="features-info-block">
          <div className="features-info-block-type">
            {t("features.case_size")}
          </div>
          <div className="features-info-block-name">
            {featuresData && checkValidations(featuresData.case_size)}
          </div>
        </div>

        <div className="features-info-block">
          <div className="features-info-block-type">
            {" "}
            {t("features.case_thickness")}
          </div>
          <div className="features-info-block-name">
            {featuresData && checkValidations(featuresData.case_thickness)}
          </div>
        </div>

        <div className="features-info-block">
          <div className="features-info-block-type">
            {t("features.band_material")}
          </div>
          <div className="features-info-block-name">
            {featuresData && checkValidations(featuresData.band_material)}
          </div>
        </div>

        <div className="features-info-block">
          <div className="features-info-block-type">
            {t("features.water_resistance")}
          </div>
          <div className="features-info-block-name">
            {featuresData && checkValidations(featuresData.water_resistant)}
          </div>
        </div>

        <div className="features-info-block">
          <div className="features-info-block-type">
            {t("features.watch_weight")}
          </div>
          <div className="features-info-block-name">
            {featuresData && checkValidations(featuresData.weight)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseSingleFeatures;
