import { useSelector } from "react-redux";
import WatchesListItem from "./watchesListItem/WatchesListItem";

const WatchesList = () => {
  const watchList = useSelector((state) => state.watches.watchList);

  return (
    <div className="watches-list">
      {watchList.map((item) => {
        return <WatchesListItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default WatchesList;
