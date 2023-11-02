import { useSelector } from "react-redux";
import "./Belts.scss";
import BeltsItem from "./belts-item/BeltsItem";
import Filter from "../filter/Filter";

const Belts = () => {
  const beltsArr = useSelector((state) => state.belts.belts);

  return (
    <div className="belts">
      <Filter filterName="belts" />
      {beltsArr.map((item) => {
        return <BeltsItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Belts;
