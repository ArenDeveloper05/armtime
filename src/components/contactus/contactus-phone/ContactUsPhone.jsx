import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgArrowBottomLeft } from "react-icons/cg";

const ContactUsPhone = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handleShowPhoneNumber = () => {
    setShowPhoneNumber((prev) => (prev = !prev));
  };

  return (
    <div className="contact-us-with-phone">
      <div className="contact-us-with-phone-desc">
        <p className="contact-us-with-phone-desc-title">
          Do you want to contact with us with telephone?
          <span>
            Here is our phone number <CgArrowBottomLeft />
          </span>
        </p>
      </div>

      <div className="contact-us-with-phone-prnt">
        {showPhoneNumber && (
          <p className="contact-us-with-phone-prnt-txt">+1 12121212</p>
        )}
        <BsFillTelephoneFill
          onClick={handleShowPhoneNumber}
          className="contact-us-with-phone-prnt-icon"
        />
      </div>
    </div>
  );
};

export default ContactUsPhone;
