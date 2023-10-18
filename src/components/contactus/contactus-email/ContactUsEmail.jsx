import { CgArrowBottomLeft } from "react-icons/cg";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { useState } from "react";

const ContactUsEmail = () => {
  const [showEmailIcon, setShowEmailIcon] = useState(false);

  const handleShowEmail = () => {
    setShowEmailIcon((prev) => (prev = !prev));
  };

  return (
    <div className="contact-us-with-email">
      <div className="contact-us-with-email-desc">
        <p className="contact-us-with-email-desc-title">
          Do you want to contact with us with email?
          <span>
            Here is our email <CgArrowBottomLeft />
          </span>
        </p>
      </div>

      <div className="contact-us-with-email-icons">
        {showEmailIcon ? (
          <div className="contact-us-with-email-icons-openedEmail">
            <p className="contact-us-with-email-icons-openedEmail-txt">
              armTime@gmail.com
            </p>
            <HiOutlineMailOpen
              className="contact-us-with-email-icons-openedEmail-openedIcon"
              onClick={handleShowEmail}
            />
          </div>
        ) : (
          <TfiEmail
            className="contact-us-with-email-icons-closedIcon"
            onClick={handleShowEmail}
          />
        )}
      </div>
    </div>
  );
};

export default ContactUsEmail;
