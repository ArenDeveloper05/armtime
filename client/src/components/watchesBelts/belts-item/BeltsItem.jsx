import { useNavigate } from "react-router";
import BeltsItemDescription from "./belts-item-description/BeltsItemDescription";
import BeltsItemImages from "./belts-item-images/BeltsItemImages";
import { generateImage } from "../../../utils/helpers/generateImage";

const BeltsItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="belts-list-item"
      onClick={() => {
        navigate(`/belts/${item.id}`);
      }}
    >
      <BeltsItemImages img={generateImage(item.image[0].url)} />
      <BeltsItemDescription item={item} />
    </div>
  );
};

export default BeltsItem;
