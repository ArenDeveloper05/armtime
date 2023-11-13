import WatchesListItem from "./watchesListItem/WatchesListItem";

const WatchesList = ({ data }) => {
  const currentLanguage = "am";

  return (
    <div className="watches-list">
      {data &&
        data.map((item) => {
          return (
            <WatchesListItem key={item.id} item={item} lang={currentLanguage} />
          );
        })}
    </div>
  );
};

export default WatchesList;
