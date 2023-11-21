import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchesThunk } from "../../../../redux/slices/watchesSlice";
import { getBeltsThunk } from "../../../../redux/slices/beltsSlice";

import BaseSingleDescBuy from "./base-single-desc-buy/BaseSingleDescBuy";
import BaseSingleDescInfo from "./base-single-desc-info/BaseSingleDescInfo";
import BaseSingleDescType from "./base-single-desc-type/BaseSingleDescType";
import Identical from "../../../identical/Identical";

const BaseSingleDesc = ({ type }) => {
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

  return (
    <div className="base-single-desc">
      <BaseSingleDescInfo />
      {type && <BaseSingleDescType type={type} />}
      <BaseSingleDescBuy />
      {moreItems && (
        <Identical
          data={moreItems.slice(0, 5)}
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
