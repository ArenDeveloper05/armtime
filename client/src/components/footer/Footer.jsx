//Scss
import "./Footer.scss";
//Components
import { FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-inner">
          <div className="footer-inner-info">
            <div className="footer-inner-info-logo">Armenian Time</div>
          </div>

          <div className="footer-inner-contact">
            <div className="footer-inner-contact-title">Contact</div>
            <div className="footer-inner-contact-info">
              <div className="footer-inner-contact-info-item">
                <FaPhone style={{ width: "16px", height: "16px" }} />
                <div>+374 ( 93 ) 45 - 35 - 50</div>
              </div>
              <div className="footer-inner-contact-info-item">
                <CgMail className="footer-inner-contact-info-item-icon" />
                <div>rubinyan559@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="footer-inner-follow">
            <div className="footer-inner-follow-title">Follow Us</div>
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