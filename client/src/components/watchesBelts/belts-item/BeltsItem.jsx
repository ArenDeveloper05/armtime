import BeltsItemDescription from "./belts-item-description/BeltsItemDescription";
import BeltsItemImage from "./belts-item-image/BeltsItemImage";
import { generateImage } from "../../../utils/helpers/generateImage";
import { useNavigate } from "react-router-dom";

const BeltsItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="belts-list-item"
      onClick={() => {
        navigate(`/belts/${item.id}`);
      }}
    >
      <BeltsItemImage img={generateImage(item.image[0].url)} />
      <BeltsItemDescription item={item} />
    </div>
  );
};

export default BeltsItem;
