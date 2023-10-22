//Scss
import { useEffect, useState } from "react";
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

  const onCalcPrice = () => {
    let price = 0;
    if (basketWatches.length !== 0) {
      basketWatches.map((watch) => {
        price += +watch.price;
        return "";
      });
    }

    return +price;
  };
  return (
    <div className="buy">
      <div
        className="buy-inner"
        onClick={() => setBasketDialogOpen((prev) => !prev)}
      >
        <div className="buy-inner-icon">
          <div className="buy-inner-icon-counter">{basketWatches.length}</div>
          <SlBasket className="buy-inner-icon-icn" />
        </div>
        <div className="buy-inner-cartName">My cart</div>
        <div className="buy-inner-price">
          {onCalcPrice()}
          <TbCurrencyDram style={{ width: "18px", height: "18px" }} />
        </div>
      </div>

      {basketDialogOpen &&
        (basketWatches.length === 0 ? setBasketDialogOpen(false) : true) && (
          <>
            <VscTriangleUp className="buy-dialog-inner-triIcon" />
            <div className="buy-dialog">
              <div className="buy-dialog-inner">
                {basketWatches.map((watch) => {
                  return <BasketWatchesList watch={watch} key={watch.id} />;
                })}
              </div>
              <div className="buy-dialog-inner-foot">
                <div className="buy-dialog-inner-foot-text">Total*</div>
                <div className="buy-dialog-inner-foot-price">
                  {onCalcPrice()}
                  <TbCurrencyDram style={{ width: "15px", height: "15px" }} />
                </div>
                <div className="buy-dialog-inner-foot-button">Put Order</div>
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default BasketCart;
