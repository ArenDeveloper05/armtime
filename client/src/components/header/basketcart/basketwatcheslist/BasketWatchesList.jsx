import { Link, useNavigate } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { TbCurrencyDram } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { onRemoveWatch } from "../../../../redux/slices/basketWatchesSlice";
import { generateImage } from "../../../../utils/helpers/generateImage";

import noImage from "../../../../images/no-image.jpg";
import { useTranslation } from "react-i18next";

const BasketWatchesList = ({ watch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div className="buy-dialog-inner-watchList">
      <div className="buy-dialog-inner-watchList-image">
        <img
          src={
            watch.image && watch.image[0]
              ? generateImage(watch.image[0].url)
              : noImage
          }
          alt={watch.title}
        />
      </div>
      <div className="buy-dialog-inner-watchList-info">
        <div className="buy-dialog-inner-watchList-info-title">
          <p>{watch[`name_${language}`]}</p>
        </div>
        <div className="buy-dialog-inner-watchList-info-price">
          <p>{watch.discounted_price}</p>
          <TbCurrencyDram style={{ width: "14px", height: "14px" }} />
        </div>
        <Link
          className="buy-dialog-inner-watchList-info-view"
          onClick={() => {
            navigate(
              `/${watch.case_material ? "watches" : "belts"}/${watch.id}`
            );
          }}
        >
          {t("header.header_basket.view_product")}
        </Link>
      </div>
      <div
        className="buy-dialog-inner-watchList-close"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
