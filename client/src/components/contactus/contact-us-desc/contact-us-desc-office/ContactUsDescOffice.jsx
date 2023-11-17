import ContactUsDescOfficeItem from "./contact-us-desc-office-item/ContactUsDescOfficeItem";
import { contactConfig } from "../../../../config";

const ContactUsDescOffice = () => {
  return (
    <div className="contact-us-desc-office">
      <p className="contact-us-desc-office-title">Contact with office</p>

      {contactConfig.contactOfficeConfig.map((item) => {
        return <ContactUsDescOfficeItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ContactUsDescOffice;
