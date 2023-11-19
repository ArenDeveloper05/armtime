import { useTranslation } from "react-i18next";
import noImage from "../../../../images/no-image.jpg";

const BeltsItemImage = ({ img, exist }) => {
  const { t } = useTranslation();
  return (
    <div className="belts-list-item-image">
      <img src={img ? img : noImage} alt="Belt" />
      <div
        className="belts-list-item-image-isAvailable"
        style={{
          backgroundColor: exist ? "#28B464" : "#C41E3A",
        }}
      >
        {exist ? t("available.yes") : t("available.no")}
      </div>
    </div>
  );
};

export default BeltsItemImage;
