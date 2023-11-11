import "./Delivery.scss";
import { useSelector } from "react-redux";
import DeliveryListItem from "./delivery-list-item/DeliveryListItem";

const Delivery = () => {
  const deliveryData = useSelector((state) => state.delivery.delivery);

  return (
    <div className="delivery">
      <p className="delivery-title">Delivery Terms</p>

      <div className="delivery-list">
        {deliveryData.map((item) => {
          return <DeliveryListItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Delivery;
