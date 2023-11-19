import { contactConfig } from "../../../../config";
import ContactUsDescNetworksItem from "./contact-us-desc-networks-item/ContactUsDescNetworksItem";
import { useTranslation } from "react-i18next";

const ContactUsDescNetworks = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-us-desc-networks">
      <p className="contact-us-desc-networks-title">
        {t("main.main_contactUs.social_networks")}
      </p>

      <div className="contact-us-desc-networks-prnt">
        {contactConfig.contactNetworksConfig.map((item) => {
          return <ContactUsDescNetworksItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ContactUsDescNetworks;
