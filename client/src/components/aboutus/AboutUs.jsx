import PageBanner from "../common/page-banner/PageBanner";
import "./AboutUs.scss";
import AboutUsDesc from "./about-us-desc/AboutUsDesc";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us">
      <PageBanner mainTitle={t("main.main_aboutUs.title")} />
      <AboutUsDesc />
    </div>
  );
};

export default AboutUs;
