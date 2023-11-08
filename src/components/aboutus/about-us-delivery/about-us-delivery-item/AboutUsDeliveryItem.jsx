const AboutUsDeliveryItem = ({ item }) => {
  return (
    <div className="about-us-delivery-item">
      <p className="about-us-delivery-item-title">{item.title}</p>

      <p className="about-us-delivery-item-txt">{item.desc}</p>
    </div>
  );
};

export default AboutUsDeliveryItem;
