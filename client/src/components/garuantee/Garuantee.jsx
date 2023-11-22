import "./Garuantee.scss";
import PageBanner from "../common/page-banner/PageBanner";
import { useTranslation } from "react-i18next";
const Garuantee = () => {
  const { t } = useTranslation();

  return (
    <div className="garuantee">
      <PageBanner mainTitle={t("main.main_garuantee.garuantee")} />

      <div className="garuantee-text">
        <p>{t("main.main_garuantee.text")}</p>
      </div>
    </div>
  );
};

export default Garuantee;
