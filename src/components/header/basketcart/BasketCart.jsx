//Scss
import { useState } from "react";
import "./BasketCart.scss";

import { SlBasket } from "react-icons/sl";
import { TbCurrencyDram } from "react-icons/tb";
import { VscTriangleUp } from "react-icons/vsc";
import { useSelector } from "react-redux";
import BasketWatchesList from "./basketwatcheslist/BasketWatchesList";

const BasketCart = () => {
  const [basketDialogOpen, setBasketDialogOpen] = useState(false);
  const basketWatches = useSelector(
    (state) => state.basketWatches.basketWatches
  );
  return (
    <div className="buy">
      <div
        className="buy-inner"
        onClick={() => setBasketDialogOpen(!basketDialogOpen)}
      >
        <div className="buy-inner-icon">
          <SlBasket className="buy-inner-icon-icn" />
        </div>
        <div className="buy-inner-cartName">My cart</div>
        <div className="buy-inner-price">
          0
          <TbCurrencyDram style={{ width: "18px", height: "18px" }} />
        </div>
      </div>

      {basketDialogOpen && (
        <>
          <VscTriangleUp className="buy-dialog-inner-triIcon" />
          <div className="buy-dialog">
            <div className="buy-dialog-inner">
              {basketWatches.map((watch) => {
                return <BasketWatchesList watch={watch} key={watch.id} />;
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BasketCart;
