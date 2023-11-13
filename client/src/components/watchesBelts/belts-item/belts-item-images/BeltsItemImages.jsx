import noImage from "../../../../images/no-image.jpg";

const BeltsItemImages = ({ img }) => {
  return (
    <div className="belts-list-item-images">
      <img src={img ? img : noImage} alt="Belt" />
    </div>
  );
};

export default BeltsItemImages;
