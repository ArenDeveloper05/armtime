import SingleWatchCardBuy from "./single-watch-card-buy/SingleWatchCardBuy";
import SingleWatchCardDeliveryInfo from "./single-watch-card-delivery-info/SingleWatchCardDeliveryInfo";
import SingleWatchCardInfo from "./single-watch-card-info/SingleWatchCardInfo";

const SingleWatchCardDesc = () => {
  return (
    <div className="single-watch-card-description">
      <p className="single-watch-card-description-name">
        AWI GOLD V0101.1 Men's Automatic Mechanical 14K Gold Watch
      </p>

      <p className="single-watch-card-description-code">A0001140-1</p>

      <p className="single-watch-card-description-price">$3500</p>

      <SingleWatchCardDeliveryInfo />

      <SingleWatchCardInfo />

      <SingleWatchCardBuy />
    </div>
  );
};

export default SingleWatchCardDesc;
