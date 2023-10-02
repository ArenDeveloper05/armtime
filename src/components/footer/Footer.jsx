//Scss
import "./Footer.scss";
//Components
import Container from "../container/Container";
import { FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div className="footer-inner">
            <div className="footer-inner-info">
              <div className="footer-inner-info-logo">Armenian Time</div>
              <div className="footer-inner-info-text">
                You can use them for inspiration or as a starting point to
                create your next website project, since each template comes with
                some other example sections, apart from the footer. Continue
                reading below to find the live preview and download links.
                Enjoy!
              </div>
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
                <a href="https://www.facebook.com/profile.php?id=100075839478957">
                  <FaFacebookSquare className="footer-inner-follow-links-link" />
                </a>
                <a href="https://www.instagram.com/armeniantime_/">
                  <FaInstagram className="footer-inner-follow-links-link" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <div className="foot">"AWI Group" CJSC © 2023. All Rights Reserved.</div>
    </>
  );
};

export default Footer;
