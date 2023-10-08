import SingleWatchCardDesc from "./single-watch-card-desc/SingleWatchCardDesc";
import SingleWatchCardImage from "./single-watch-card-image/SingleWatchCardImage";

const SingleWatchCard = () => {
  return (
    <div className="single-watch-card">
      <SingleWatchCardImage />

      <SingleWatchCardDesc />
    </div>
  );
};

export default SingleWatchCard;
