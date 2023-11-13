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
  } = useTranslation();

  const basketWatches = useSelector(
    (state) => state.basketWatches.basketWatches
  );
  const [status, setStatus] = useState([]);

  useEffect(() => {
    setStatus(basketWatches.filter((watch) => watch.id === item.id));
  }, [basketWatches, item.id]);

  return (
    <div className="belts-list-item-description">
      <p>Name: {item[`name_${language}`]}</p>
      <p>Color: {item.color}</p>

      <div className="belts-list-item-description-buy">
        <p className="belts-list-item-description-buy-price">
          <del>{item.price}</del>
          {item.discounted_price}
          <TbCurrencyDram style={{ width: "17px", height: "17px" }} />
        </p>

        {status.length === 0 ? (
          <button
            className="belts-list-item-description-buy-btn"
            onClick={() => {
              dispatch(onAddWatch(item));
            }}
          >
            Buy
          </button>
        ) : (
          <Link
            className="watches-list-item-description-buy-btn"
            to={ROUTER.CHECKOUT_PAGE_ROUTE}
            onClick={(e) => e.stopPropagation()}
          >
            Put order
          </Link>
        )}
      </div>
    </div>
  );
};

export default BeltsItemDescription;
