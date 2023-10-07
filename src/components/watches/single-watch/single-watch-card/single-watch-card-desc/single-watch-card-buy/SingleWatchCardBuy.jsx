import { FaShoppingBag } from "react-icons/fa";
import Counter from "../../../../../common/counter/Counter";

const SingleWatchCardBuy = () => {
  return (
    <div className="single-watch-card-description-buy">
      <Counter />

      <button className="single-watch-card-description-buy-btn">
        <FaShoppingBag className="single-watch-card-description-buy-btn-bag" />{" "}
        buy
      </button>
    </div>
  );
};

export default SingleWatchCardBuy;
