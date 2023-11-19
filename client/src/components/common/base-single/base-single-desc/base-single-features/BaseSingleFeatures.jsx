import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import "./BaseSingleFeatures.scss";
import { useTranslation } from "react-i18next";

const BaseSingleFeatures = ({ featuresData }) => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [features, setFeatures] = useState([
    {
      id: 1,
      translation_key: "features.gender",
      validation_key: "sex",
    },
    {
      id: 2,
      translation_key: "features.movement_type",
      validation_key: "type",
    },
    {
      id: 3,
      translation_key: "features.case_material",
      validation_key: "case_material",
    },
    {
      id: 4,
      translation_key: "features.case_size",
      validation_key: "case_size",
    },
    {
      id: 5,
      translation_key: "features.case_thickness",
      validation_key: "case_thickness",
    },
    {
      id: 6,
      translation_key: "features.band_material",
      validation_key: "band_material",
    },
    {
      id: 7,
      translation_key: "features.water_resistance",
      validation_key: "water_resistant",
    },
    {
      id: 8,
      translation_key: "features.watch_weight",
      validation_key: "weight",
    },
  ]);

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
        {features &&
          features.map(({ id, translation_key, validation_key }) => {
            return (
              <div className="features-info-block" key={id}>
                <div className="features-info-block-type">
                  {t(translation_key)}
                </div>
                <div className="features-info-block-name">
                  {featuresData &&
                    checkValidations(featuresData[validation_key])}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BaseSingleFeatures;
