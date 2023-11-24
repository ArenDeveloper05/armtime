import { t } from "i18next";
import { useContext } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { BaseSingleContext } from "../../BaseSingle";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../../../../router/router";
import { onAddWatch } from "../../../../../redux/slices/basketWatchesSlice";

const BaseSingleDescBuy = () => {
  const { id, item } = useContext(BaseSingleContext);

  const basketItems = useSelector((state) => state.basketWatches.basketWatches);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function itemInBasket() {
    const filtered = basketItems.filter((item) => item.id === Number(id));
    return filtered.length === 0;
  }

  return (
    <div className="base-single-desc-buy">
      <button
        className="base-single-desc-buy-btn"
        onClick={() => {
          if (itemInBasket()) {
            dispatch(onAddWatch(item));
          } else {
            navigate(ROUTER.CHECKOUT_PAGE_ROUTE);
          }
        }}
      >
        <FaShoppingBag />
        {itemInBasket() ? t("buy") : t("main.main_putOrder.Put_Order")}
      </button>
    </div>
  );
};

export default BaseSingleDescBuy;
