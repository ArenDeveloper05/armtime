import { useEffect, useState } from "react";
import "./ContactUs.scss";

import ContactUsDesc from "./contact-us-desc/ContactUsDesc";
import PageBanner from "../common/page-banner/PageBanner";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-us">
      <PageBanner mainTitle={t("main.main_contactUs.title")} />

      <ContactUsDesc />
    </div>
  );
};

export default ContactUs;
