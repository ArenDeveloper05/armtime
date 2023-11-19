import { useDispatch, useSelector } from "react-redux";
import { getBeltsThunk } from "../../redux/slices/beltsSlice";
import { useEffect } from "react";

import BeltsItem from "./belts-item/BeltsItem";
import Filter from "../filter/Filter";

import "./Belts.scss";
import Loading from "../loading/Loading";

const Belts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBeltsThunk());
  }, []);

  const beltsData = useSelector((state) => state.belts.filterList);
  const loading = useSelector((state) => state.belts.beltListLoading);
  const error = useSelector((state) => state.belts.beltListError);

  return (
    <div className="belts">
      <Filter filterName="belts" />
      <div className="belts-list">
        {beltsData &&
          beltsData.map((item) => {
            return <BeltsItem key={item.id} item={item} />;
          })}
      </div>
      {loading && <Loading />}
      {error && <h1>error</h1>}
    </div>
  );
};

export default Belts;
