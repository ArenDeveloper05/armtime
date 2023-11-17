import ContactUsDescNetworks from "./contact-us-desc-networks/ContactUsDescNetworks";
import ContactUsDescOffice from "./contact-us-desc-office/ContactUsDescOffice";

const ContactUsDesc = () => {
  return (
    <div className="contact-us-desc">
      <ContactUsDescOffice />

      <ContactUsDescNetworks />
    </div>
  );
};

export default ContactUsDesc;
