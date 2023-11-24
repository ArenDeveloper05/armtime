import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { useTranslation } from "react-i18next";

import "./BaseSingleFeatures.scss";

const BaseSingleFeatures = ({ featuresData }) => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [features, setFeatures] = useState([
    {
      id: 1,
      translation_key: "features.gender",
      validation_key: "sex",
      feature_type: "watch",
    },
    {
      id: 2,
      translation_key: "features.movement_type",
      validation_key: "type",
      feature_type: "watch",
    },
    {
      id: 3,
      translation_key: "features.case_material",
      validation_key: "case_material",
      feature_type: "watch",
    },
    {
      id: 4,
      translation_key: "features.case_size",
      validation_key: "case_size",
      feature_type: "watch",
    },
    {
      id: 5,
      translation_key: "features.case_thickness",
      validation_key: "case_thickness",
      feature_type: "watch",
    },
    {
      id: 6,
      translation_key: "features.band_material",
      validation_key: "band_material",
      feature_type: "watch",
    },
    {
      id: 7,
      translation_key: "features.water_resistance",
      validation_key: "water_resistant",
      feature_type: "watch",
    },
    {
      id: 8,
      translation_key: "features.watch_weight",
      validation_key: "weight",
      feature_type: "watch",
    },
    {
      id: 9,
      translation_key: "features.material",
      validation_key: "material",
      feature_type: "belt",
    },
    {
      id: 10,
      translation_key: "features.sizes",
      validation_key: "sizes",
      feature_type: "belt",
    },
  ]);

  const { t } = useTranslation();

  function checkValidations(value) {
    return value ? value : "";
  }

  const wichPage = window.location.pathname.includes("belts")
    ? "belt"
    : "watch";

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
          features
            .filter(
              (item) =>
                item.feature_type === "universal" ||
                item.feature_type === wichPage
            )
            .map(({ id, translation_key, validation_key }) => {
              const text =
                featuresData && checkValidations(featuresData[validation_key]);
              return (
                <div className="features-info-block" key={id}>
                  <div className="features-info-block-type">
                    {t(translation_key)}
                  </div>
                  <div className="features-info-block-name">
                    {text === "male"
                      ? t("male")
                      : text === "female"
                      ? t("female")
                      : text === "quartz"
                      ? t("quartz")
                      : text === "automatic"
                      ? t("automatic")
                      : text}
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default BaseSingleFeatures;
