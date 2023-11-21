import "./Garuantee.scss";
import PageBanner from "../common/page-banner/PageBanner";
import { useTranslation } from "react-i18next";
import GaruanteeBg from "../../images/garuantee-bg.jpg";
const Garuantee = () => {
  const { t } = useTranslation();

  const links = [t("header.home"), t("main.main_garuantee.garuantee")];
  return (
    <div className="garuantee">
      <PageBanner
        mainTitle={t("main.main_garuantee.garuantee")}
        links={links}
        BannerImage={GaruanteeBg}
      />

      <div className="garuantee-text">
        <p>{t("main.main_garuantee.text")}</p>
      </div>
    </div>
  );
};

export default Garuantee;
