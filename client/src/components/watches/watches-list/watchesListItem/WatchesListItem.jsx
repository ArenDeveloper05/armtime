import { useEffect, useState } from "react";
import { ROUTER } from "../../../../router/router";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { onAddWatch } from "../../../../redux/slices/basketWatchesSlice";

import { TbCurrencyDram } from "react-icons/tb";

import noImage from "../../../../images/no-image.jpg";

import { generateImage } from "../../../../utils/helpers/generateImage";
import { t } from "i18next";

const WatchesListItem = ({ item, lang }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basketWatches = useSelector(
    (state) => state.basketWatches.basketWatches
  );
  const [status, setStatus] = useState([]);

  useEffect(() => {
    setStatus(basketWatches.filter((watch) => watch.id === item.id));
  }, [basketWatches, item.id]);

  return (
    <div
      className="watches-list-item"
      onClick={() => {
        navigate(`/watches/${item.id}`);
      }}
    >
      <div className="watches-list-item-image">
        <div className="watches-list-item-image-gender">{item.gender}</div>

        <img
          src={
            item.image && item.image[0]
              ? generateImage(item.image[0].url)
              : noImage
          }
          alt={item.title}
        />

        <div
          className="watches-list-item-image-isAvailable"
          style={{
            backgroundColor: item.exist ? "#28B464" : "#C41E3A",
          }}
        >
          {item.exist ? t("available.yes") : t("available.no")}
        </div>
      </div>

      <div className="watches-list-item-description">
        <p className="watches-list-item-description-title">
          {item[`name_${lang}`]}
        </p>

        <p className="watches-list-item-description-color">{item.color}</p>

        <p className="watches-list-item-description-type">{item.type}</p>

        <div className="watches-list-item-description-buy">
          <p className="watches-list-item-description-buy-price">
            <del>
              {item.price !== 0 && item.price}
              {item.price !== 0 && (
                <TbCurrencyDram style={{ width: "17px", height: "17px" }} />
              )}
            </del>
            {item.discounted_price}
            <TbCurrencyDram style={{ width: "17px", height: "17px" }} />
          </p>

          {status.length === 0 ? (
            <button
              className="watches-list-item-description-buy-btn"
              onClick={(e) => {
                e.stopPropagation();
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
    </div>
  );
};

export default WatchesListItem;
