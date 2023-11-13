import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../router/router";

import useOutsideClick from "../../../utils/hooks/useOutsideClick";

import { SlBasket } from "react-icons/sl";
import { TbCurrencyDram } from "react-icons/tb";
import { VscTriangleUp } from "react-icons/vsc";
import { useSelector } from "react-redux";

import BasketWatchesList from "./basketwatcheslist/BasketWatchesList";

import "./BasketCart.scss";

const BasketCart = () => {
  const [basketDialogOpen, setBasketDialogOpen] = useState(false);
  const cartRef = useRef(null);
  const basketWatches = useSelector(
    (state) => state.basketWatches.basketWatches
  );

  useEffect(() => {
    if (basketWatches.length === 0) {
      setBasketDialogOpen(false);
    }
  }, [basketWatches.length]);

  const onCalcPrice = () => {
    let price = 0;
    if (basketWatches.length !== 0) {
      basketWatches.map((watch) => {
        price += +watch.discounted_price;
        return "";
      });
    }

    return +price;
  };

  useOutsideClick(cartRef, () => {
    if (basketDialogOpen) {
      setBasketDialogOpen(false);
    }
  });
  return (
    <div className="buy" ref={cartRef}>
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

      {basketDialogOpen && (
        <>
          <VscTriangleUp className="buy-dialog-inner-triIcon" />
          <div className="buy-dialog ">
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
              <Link
                className="buy-dialog-inner-foot-button"
                to={ROUTER.CHECKOUT_PAGE_ROUTE}
              >
                Put Order
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BasketCart;
