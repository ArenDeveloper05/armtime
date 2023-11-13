import "./Counter.scss";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleMinusBtn = () => {
    if (count > 1) {
      setCount((prev) => (prev -= 1));
    }
  };

  const handlePlusBtn = () => {
    setCount((prev) => (prev += 1));
  };

  return (
    <div className="single-watch-card-description-buy-counter counter">
      <AiOutlineMinus
        onClick={handleMinusBtn}
        className="counter-btn counter-decrement-btn"
      />

      {count}

      <AiOutlinePlus
        onClick={handlePlusBtn}
        className="counter-btn counter-increment-btn"
      />
    </div>
  );
};

export default Counter;
