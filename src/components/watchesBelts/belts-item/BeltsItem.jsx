import { useNavigate } from "react-router";
import BeltsItemDescription from "./belts-item-description/BeltsItemDescription";
import BeltsItemImages from "./belts-item-images/BeltsItemImages";

const BeltsItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="belts-item"
      onClick={() => {
        navigate(`/belts/${item.id}`);
      }}
    >
      <BeltsItemImages img={item.img} />

      <BeltsItemDescription item={item} />
    </div>
  );
};

export default BeltsItem;
