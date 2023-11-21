//Scss
import "./Footer.scss";
//Components
import { FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer>
        <div className="footer-inner">
          <div className="footer-inner-info">
            <div className="footer-inner-info-logo">Armenian Time</div>
          </div>

          <div className="footer-inner-contact">
            <div className="footer-inner-contact-title">
              {t("footer.contact")}
            </div>
            <div className="footer-inner-contact-info">
              <div className="footer-inner-contact-info-item">
                <FaPhone style={{ width: "16px", height: "16px" }} />
                <div>+374 ( 94 ) 31 - 31 - 76</div>
              </div>
              <div className="footer-inner-contact-info-item">
                <FaPhone style={{ width: "16px", height: "16px" }} />
                <div>+374 ( 43 ) 31 - 31 - 76</div>
              </div>
            </div>
          </div>

          <div className="footer-inner-follow">
            <div className="footer-inner-follow-title">
              {t("footer.follow_us")}
            </div>
            <div className="footer-inner-follow-links">
              <a
                href="https://www.facebook.com/profile.php?id=100075839478957"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare className="footer-inner-follow-links-link" />
              </a>
              <a
                href="https://www.instagram.com/armeniantime_/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="footer-inner-follow-links-link" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
