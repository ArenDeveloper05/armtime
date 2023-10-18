import { useSelector } from "react-redux";
import WatchesListItem from "./watchesListItem/WatchesListItem";

const WatchesList = () => {
  const filterList = useSelector((state) => state.watches.filterList);

  return (
    <div className="watches-list">
      {filterList.map((item) => {
        return <WatchesListItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default WatchesList;
