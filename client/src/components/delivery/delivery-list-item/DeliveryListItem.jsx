const DeliveryListItem = ({ item }) => {
  return (
    <div className="delivery-list-item">
      <p className="delivery-list-item-title">{item.title}</p>

      <p className="delivery-list-item-txt">{item.desc}</p>
    </div>
  );
};

export default DeliveryListItem;
