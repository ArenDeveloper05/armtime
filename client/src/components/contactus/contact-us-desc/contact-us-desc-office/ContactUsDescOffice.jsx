import ContactUsDescOfficeItem from "./contact-us-desc-office-item/ContactUsDescOfficeItem";
import { contactConfig } from "../../../../config";
import { useTranslation } from "react-i18next";

const ContactUsDescOffice = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-us-desc-office">
      <p className="contact-us-desc-office-title">
        {t("main.main_contactUs.contact_with_office")}
      </p>

      {contactConfig.contactOfficeConfig.map((item) => {
        return <ContactUsDescOfficeItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ContactUsDescOffice;
