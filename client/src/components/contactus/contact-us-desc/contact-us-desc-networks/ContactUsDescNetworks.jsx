import { contactConfig } from "../../../../config";
import ContactUsDescNetworksItem from "./contact-us-desc-networks-item/ContactUsDescNetworksItem";

const ContactUsDescNetworks = () => {
  return (
    <div className="contact-us-desc-networks">
      <p className="contact-us-desc-networks-title">Social Network</p>

      <div className="contact-us-desc-networks-prnt">
        {contactConfig.contactNetworksConfig.map((item) => {
          return <ContactUsDescNetworksItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ContactUsDescNetworks;
