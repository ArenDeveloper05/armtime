import "./AboutUs.scss";
import AboutUsDelivery from "./about-us-delivery/AboutUsDelivery";
import AboutUsDesc from "./about-us-desc/AboutUsDesc";

const AboutUs = () => {
  return (
    <div className="about-us">
      <AboutUsDesc />

      <AboutUsDelivery />
    </div>
  );
};

export default AboutUs;
