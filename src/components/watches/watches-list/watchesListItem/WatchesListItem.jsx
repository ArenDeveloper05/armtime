import { Link, useNavigate } from "react-router-dom";
import { TbCurrencyDram } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { onAddWatch } from "../../../../redux/slices/basketWatchesSlice";
import { useEffect, useState } from "react";
import { ROUTER } from "../../../../router/router";

const WatchesListItem = ({ item }) => {
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

        <img src={item.img} alt={item.title} />

        <div
          className="watches-list-item-image-isAvailable"
          style={{
            backgroundColor: item.isAvailable.includes("not available")
              ? "#C41E3A"
              : "#28B464",
          }}
        >
          {item.isAvailable}
        </div>
      </div>

      <div className="watches-list-item-description">
        <p className="watches-list-item-description-title">
          Name: {item.title}
        </p>

        <p className="watches-list-item-description-color">
          Color: {item.color}
        </p>

        <p className="watches-list-item-description-type">Type: {item.type}</p>

        <div className="watches-list-item-description-buy">
          <p className="watches-list-item-description-buy-price">
            {item.price}
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
