import noImage from "../../../../images/no-image.jpg";

const BeltsItemImage = ({ img }) => {
  return (
    <div className="belts-list-item-image">
      <img src={img ? img : noImage} alt="Belt" />
    </div>
  );
};

export default BeltsItemImage;
