import { useTranslation } from "react-i18next";

const AboutUsDesc = () => {
  const { t } = useTranslation();
  return (
    <div className="about-us-desc">
      <p className="about-us-desc-txt">{t("main.main_aboutUs.desc")}</p>
    </div>
  );
};

export default AboutUsDesc;
