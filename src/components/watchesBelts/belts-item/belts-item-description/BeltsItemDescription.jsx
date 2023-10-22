import { TbCurrencyDram } from "react-icons/tb";

const BeltsItemDescription = ({ item }) => {
  return (
    <div className="belts-item-description">
      <p>Name: {item.title}</p>
      <p>Color: {item.color}</p>

      <div className="belts-item-description-buy">
        <p className="belts-item-description-buy-price">
          {item.price}
          <TbCurrencyDram style={{ width: "17px", height: "17px" }} />
        </p>
        <button className="belts-item-description-buy-btn">Buy</button>
      </div>
    </div>
  );
};

export default BeltsItemDescription;
