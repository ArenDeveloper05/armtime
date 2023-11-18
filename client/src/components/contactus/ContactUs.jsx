import { useEffect, useState } from "react";
import BaseCard from "../common/base-card/BaseCard";
import "./ContactUs.scss";

import ContactUsDesc from "./contact-us-desc/ContactUsDesc";
import PageBanner from "../common/page-banner/PageBanner";
import contactBg from "../../images/banner/contact-bg.jpg";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks([t("header.home"), t("main.main_contactUs.title")]);
  }, [t]);
  return (
    <div className="contact-us">
      <PageBanner
        mainTitle={t("main.main_contactUs.title")}
        BannerImage={contactBg}
        links={links}
      />

      <ContactUsDesc />
    </div>
  );
};

export default ContactUs;
