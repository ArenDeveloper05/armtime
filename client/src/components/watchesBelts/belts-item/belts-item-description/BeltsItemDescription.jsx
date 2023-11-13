import { TbCurrencyDram } from "react-icons/tb";

const BeltsItemDescription = ({ item }) => {
  const currentLanguage = "am";

  return (
    <div className="belts-list-item-description">
      <p>Name: {item[`name_${currentLanguage}`]}</p>
      <p>Color: {item.color}</p>

      <div className="belts-list-item-description-buy">
        <p className="belts-list-item-description-buy-price">
          {item.price}
          <TbCurrencyDram style={{ width: "17px", height: "17px" }} />
        </p>
        <button className="belts-list-item-description-buy-btn">Buy</button>
      </div>
    </div>
  );
};

export default BeltsItemDescription;
