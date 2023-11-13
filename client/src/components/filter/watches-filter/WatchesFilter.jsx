import { RiEqualizerLine } from "react-icons/ri";
import {
  filterSelectConfig,
  filterKindsConfig,
  filterGenderConfig,
} from "../../../config";
import { VscTriangleUp } from "react-icons/vsc";

const activeOptionStyles = {
  backgroundColor: "#e0e0e0",
  color: "#090606",
  border: "1px solid #f6f9fc",
};

const WatchesFilter = ({
  filterOpen,
  setFilterOpen,
  filterData,
  setFilterData,
  lang,
  implementWatchFilter,
}) => {
  const selectType = (kind, option) => {
    if (filterData[kind] !== option) {
      setFilterData((prev) => {
        return {
          ...prev,
          [kind]: option,
        };
      });
    }
  };

  return (
    <>
      <div
        className="filter-inner-select"
        onClick={() => {
          setFilterOpen({
            beltOpen: false,
            watchOpen: !filterOpen.watchOpen,
          });
        }}
      >
        <RiEqualizerLine />
        <span>{filterSelectConfig[lang]}</span>
      </div>

      <div
        className="filter-inner-options"
        style={{ display: filterOpen.watchOpen ? "flex" : "none" }}
      >
        <VscTriangleUp className="filter-inner-options-triangle" />
        <div className="filter-inner-options-gender">
          {filterGenderConfig.map(({ id, title, type }) => {
            return (
              <div
                className="filter-inner-options-gender-item"
                key={id}
                onClick={() => {
                  selectType("gender", type);
                }}
                style={filterData.gender === type ? activeOptionStyles : {}}
              >
                {title[lang]}
              </div>
            );
          })}
        </div>
        <div className="filter-inner-options-types">
          {filterKindsConfig.map(({ id, title, type }) => {
            return (
              <div
                className="filter-inner-options-types-option"
                key={id}
                onClick={() => {
                  selectType("type", type);
                }}
                style={filterData.type === type ? activeOptionStyles : {}}
              >
                {title[lang]}
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            implementWatchFilter();
          }}
        >
          filter
        </button>
      </div>
    </>
  );
};

export default WatchesFilter;
