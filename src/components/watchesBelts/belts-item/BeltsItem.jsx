import BeltsItemDescription from "./belts-item-description/BeltsItemDescription";
import BeltsItemImages from "./belts-item-images/BeltsItemImages";

const BeltsItem = ({ item }) => {
  return (
    <div className="belts-item">
      <BeltsItemImages img={item.img} />

      <BeltsItemDescription item={item} />
    </div>
  );
};

export default BeltsItem;
