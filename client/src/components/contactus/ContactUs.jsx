import { useState } from "react";
import BaseCard from "../common/base-card/BaseCard";
import "./ContactUs.scss";

import ContactUsDesc from "./contact-us-desc/ContactUsDesc";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <p className="contact-us-title">Contact Us</p>

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
