import BeltsItemDescription from "./belts-item-description/BeltsItemDescription";
import BeltsItemImage from "./belts-item-image/BeltsItemImage";
import { generateImage } from "../../../utils/helpers/generateImage";

const BeltsItem = ({ item }) => {
  return (
    <div className="belts-list-item">
      <BeltsItemImage img={generateImage(item.image[0].url)} />
      <BeltsItemDescription item={item} />
    </div>
  );
};

export default BeltsItem;
