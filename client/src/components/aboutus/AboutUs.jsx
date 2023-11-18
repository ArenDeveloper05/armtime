import PageBanner from "../common/page-banner/PageBanner";
import "./AboutUs.scss";
import AboutUsDesc from "./about-us-desc/AboutUsDesc";
import aboutBg from "../../images/banner/about-bcg.jpg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const { t } = useTranslation();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks([t("header.home"), t("main.main_aboutUs.title")]);
  }, [t]);
  return (
    <div className="about-us">
      <PageBanner
        mainTitle={t("main.main_aboutUs.title")}
        BannerImage={aboutBg}
        links={links}
      />
      <AboutUsDesc />
    </div>
  );
};

export default AboutUs;
