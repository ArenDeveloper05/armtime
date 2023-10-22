import { RiEqualizerLine } from "react-icons/ri";
import {
  filterSelectConfig,
  filterKindsConfig,
  filterGenderConfig,
} from "../../../config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterWatches } from "../../../redux/slices/watchesSlice";
import { VscTriangleUp } from "react-icons/vsc";

const activeOptionStyles = {
  backgroundColor: "#e0e0e0",
  color: "#090606",
  border: "1px solid #f6f9fc",
};

const WatchesFilter = ({ filterOpen, setFilterOpen }) => {
  const lang = "en";
  const [filterData, setFilterData] = useState({
    gender: filterGenderConfig[0].title[lang],
    type: filterGenderConfig[0].title[lang],
  });

  const dispatch = useDispatch();

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

  const implementFilter = () => {
    dispatch(filterWatches(filterData));
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
          {filterGenderConfig.map(({ id, title }) => {
            return (
              <div
                className="filter-inner-options-gender-item"
                key={id}
                onClick={() => {
                  selectType("gender", title[lang]);
                }}
                style={
                  filterData.gender === title[lang] ? activeOptionStyles : {}
                }
              >
                {title[lang]}
              </div>
            );
          })}
        </div>
        <div className="filter-inner-options-types">
          {filterKindsConfig.map(({ id, title }) => {
            return (
              <div
                className="filter-inner-options-types-option"
                key={id}
                onClick={() => {
                  selectType("type", title[lang]);
                }}
                style={
                  filterData.type === title[lang] ? activeOptionStyles : {}
                }
              >
                {title[lang]}
              </div>
            );
          })}
        </div>
        <button onClick={implementFilter}>filter</button>
      </div>
    </>
  );
};

export default WatchesFilter;