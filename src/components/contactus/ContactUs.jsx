import "./ContactUs.scss";
import ContactUsEmail from "./contactus-email/ContactUsEmail";
import ContactUsPhone from "./contactus-phone/ContactUsPhone";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <ContactUsEmail />

      <ContactUsPhone />
    </div>
  );
};

export default ContactUs;
