import { useState } from "react";
import BaseCard from "../common/base-card/BaseCard";
import "./ContactUs.scss";

import ContactUsDesc from "./contact-us-desc/ContactUsDesc";
import PageBanner from "../common/page-banner/PageBanner";
import contactBg from "../../images/banner/contact-bg.jpg";

const ContactUs = () => {
  const links = ["Home", "Contact"];
  return (
    <div className="contact-us">
      <PageBanner
        mainTitle="Contact Us"
        BannerImage={contactBg}
        links={links}
      />

      {/* <div className="contact-us-cards">
        <BaseCard
          title={"Do you want to contact with us with telephone?"}
          backSideDesc={"+374 ( 93 ) 45 - 35 - 50"}
        />

        <BaseCard
          title={"Do you want to contact with us with email?"}
          backSideDesc={"armTime@gmail.com"}
        />
      </div> */}

      <ContactUsDesc />
    </div>
  );
};

export default ContactUs;
