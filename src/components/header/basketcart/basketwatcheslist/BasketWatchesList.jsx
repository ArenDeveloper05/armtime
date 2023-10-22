import { Link, useNavigate } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { TbCurrencyDram } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { onRemoveWatch } from "../../../../redux/slices/basketWatchesSlice";

const BasketWatchesList = ({ watch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="buy-dialog-inner-watchList">
      <div className="buy-dialog-inner-watchList-image">
        <img src={watch.img} alt={watch.title} />
      </div>
      <div className="buy-dialog-inner-watchList-info">
        <div className="buy-dialog-inner-watchList-info-title">
          {watch.title}
        </div>
        <div className="buy-dialog-inner-watchList-info-price">
          {watch.price}
          <TbCurrencyDram style={{ width: "14px", height: "14px" }} />
        </div>
        <Link
          className="buy-dialog-inner-watchList-info-view"
          onClick={() => {
            navigate(`/watches/${watch.id}`);
          }}
        >
          View
        </Link>
      </div>
      <div className="buy-dialog-inner-watchList-close">
        <GrFormClose
          className="buy-dialog-inner-watchList-close-icon"
          onClick={() => {
            dispatch(onRemoveWatch(watch));
          }}
        />
      </div>
    </div>
  );
};

export default BasketWatchesList;
