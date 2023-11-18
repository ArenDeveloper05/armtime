import PageBanner from "../common/page-banner/PageBanner";
import "./AboutUs.scss";
import AboutUsDesc from "./about-us-desc/AboutUsDesc";
import aboutBg from "../../images/banner/about-bcg.jpg";

const AboutUs = () => {
  const links = ["Home", "About"];
  return (
    <div className="about-us">
      <PageBanner mainTitle="About Us" BannerImage={aboutBg} links={links} />
      <AboutUsDesc />
    </div>
  );
};

export default AboutUs;
