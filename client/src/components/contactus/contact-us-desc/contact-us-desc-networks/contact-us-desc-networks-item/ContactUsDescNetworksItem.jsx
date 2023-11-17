import { Link } from "react-router-dom";

const ContactUsDescNetworksItem = ({ item }) => {
  return (
    <Link
      className="contact-us-desc-networks-prnt-item"
      key={item.id}
      to={item.link}
    >
      <item.icon />
    </Link>
  );
};

export default ContactUsDescNetworksItem;
