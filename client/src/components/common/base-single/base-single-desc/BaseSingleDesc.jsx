import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchesThunk } from "../../../../redux/slices/watchesSlice";
import { getBeltsThunk } from "../../../../redux/slices/beltsSlice";

import BaseSingleDescBuy from "./base-single-desc-buy/BaseSingleDescBuy";
import BaseSingleDescInfo from "./base-single-desc-info/BaseSingleDescInfo";
import Identical from "../../../identical/Identical";
import BaseSingleFeatures from "./base-single-features/BaseSingleFeatures";
import BaseSingleDescraption from "./base-single-descraption/BaseSingleDescraption";

const BaseSingleDesc = ({
  type,
  sex,
  case_material,
  case_size,
  case_thickness,
  band_material,
  water_resistant,
  weight,
  material,
  sizes,
  description,
  watchData,
  discounted_price,
}) => {
  const moreItems = useSelector((state) => {
    if (window.location.href.includes("watches")) {
      return state.watches.watchList;
    } else if (window.location.href.includes("belts")) {
      return state.belts.beltList;
    }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.href.includes("watches")) {
      dispatch(getWatchesThunk());
    } else if (window.location.href.includes("belts")) {
      dispatch(getBeltsThunk());
    }
  }, [dispatch]);

  const onFilterWatchData = (moreItems) => {
    return moreItems.filter(
      (item) =>
        item.model_name_en === watchData.model_name_en &&
        item.id !== watchData.id
    );
  };

  return (
    <div className="base-single-desc">
      <BaseSingleDescInfo discounted_price={discounted_price} />
      <div className="base-single-image-featMob">
        <BaseSingleFeatures
          featuresData={{
            type,
            sex,
            case_material,
            case_size,
            case_thickness,
            band_material,
            water_resistant,
            weight,
            material,
            sizes,
          }}
        />
        <BaseSingleDescraption description={description} />
      </div>
      <BaseSingleDescBuy />
      {onFilterWatchData(moreItems).length !== 0 && (
        <Identical
          data={
            window.location.href.includes("watches")
              ? onFilterWatchData(moreItems)
              : moreItems.slice(0, 5)
          }
          pageType={
            window.location.href.includes("watches")
              ? "watches"
              : window.location.href.includes("belts")
              ? "belts"
              : ""
          }
        />
      )}
    </div>
  );
};

export default BaseSingleDesc;
