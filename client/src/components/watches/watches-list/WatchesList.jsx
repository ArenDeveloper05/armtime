import { useTranslation } from "react-i18next";
import WatchesListItem from "./watchesListItem/WatchesListItem";
import { memo } from "react";

const WatchesList = ({ data }) => {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <div className="watches-list">
      {data &&
        data.map((item) => {
          return <WatchesListItem key={item.id} item={item} lang={language} />;
        })}
    </div>
  );
};

export default memo(WatchesList);
