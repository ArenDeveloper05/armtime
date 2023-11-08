import { useSelector } from "react-redux";
import AboutUsDeliveryItem from "./about-us-delivery-item/AboutUsDeliveryItem";

const AboutUsDelivery = () => {
  const aboutUsDeliveryData = useSelector(
    (state) => state.aboutUs.aboutUsDelivery
  );

  return (
    <div className="about-us-delivery">
      {aboutUsDeliveryData.map((item) => {
        return <AboutUsDeliveryItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default AboutUsDelivery;
