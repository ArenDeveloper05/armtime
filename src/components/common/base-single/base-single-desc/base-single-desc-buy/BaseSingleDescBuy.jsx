import { FaShoppingBag } from "react-icons/fa";
import Counter from "../../../counter/Counter";

const BaseSingleDescBuy = () => {
  return (
    <div className="base-single-desc-buy">
      <Counter />

      <button className="base-single-desc-buy-btn">
        <FaShoppingBag /> buy
      </button>
    </div>
  );
};

export default BaseSingleDescBuy;
