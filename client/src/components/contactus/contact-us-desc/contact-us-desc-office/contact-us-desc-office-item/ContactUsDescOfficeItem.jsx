const ContactUsDescOfficeItem = ({ item }) => {
  return (
    <div className="contact-us-desc-office-item" key={item.id}>
      <item.icon />

      <p>{item.title}</p>
    </div>
  );
};

export default ContactUsDescOfficeItem;
