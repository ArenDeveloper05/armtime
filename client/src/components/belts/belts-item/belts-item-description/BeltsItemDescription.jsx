import { TbCurrencyDram } from "react-icons/tb";
import { onAddWatch } from "../../../../redux/slices/basketWatchesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../../router/router";

const BeltsItemDescription = ({ item }) => {
  const dispatch = useDispatch();
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const basketWatches = useSelector(
    (state) => state.basketWatches.basketWatches
  );

  function itemInBasket() {
    const filtered = basketWatches.filter(
      (watch) => watch.id === Number(item.id)
    );
    return filtered.length === 0;
  }

  return (
    <div className="belts-list-item-description">
      <div className="belts-list-item-description-title">
        <p className="belts-list-item-description-title-name">
          {item[`name_${language}`]}
        </p>
        <p className="belts-list-item-description-title-color">{item.color}</p>
      </div>

      <div className="belts-list-item-description-buy">
        <p className="belts-list-item-description-buy-price">
          <del>
            {item.price !== 0 && item.price}{" "}
            {item.price !== 0 && (
              <TbCurrencyDram style={{ width: "17px", height: "17px" }} />
            )}
          </del>
          <span>
            {item.discounted_price}
            <TbCurrencyDram style={{ width: "17px", height: "17px" }} />
          </span>
        </p>

        {itemInBasket() ? (
          <button
            className="belts-list-item-description-buy-btn"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(onAddWatch(item));
            }}
          >
            {t("buy")}
          </button>
        ) : (
          <Link
            className="watches-list-item-description-buy-btn"
            to={ROUTER.CHECKOUT_PAGE_ROUTE}
            onClick={(e) => e.stopPropagation()}
          >
            {t("main.main_putOrder.Put_Order")}
          </Link>
        )}
      </div>
    </div>
  );
};

export default BeltsItemDescription;
