import { RiEqualizerLine } from "react-icons/ri";
import { filterSelectBeltConfig, filterBeltConfig } from "../../../config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterWatches } from "../../../redux/slices/watchesSlice";
import { VscTriangleUp } from "react-icons/vsc";

const activeOptionStyles = {
  backgroundColor: "#e0e0e0",
  color: "#090606",
  border: "1px solid #f6f9fc",
};

const BeltsFilter = ({ filterOpen, setFilterOpen }) => {
  const lang = "en";
  const [filterData, setFilterData] = useState({
    belt: filterBeltConfig[0].title[lang],
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
            beltOpen: !filterOpen.beltOpen,
            watchOpen: false,
          });
        }}
      >
        <RiEqualizerLine />
        <span>{filterSelectBeltConfig[lang]}</span>
      </div>

      <div
        className="filter-inner-beltOptions"
        style={{ display: filterOpen.beltOpen ? "flex" : "none" }}
      >
        <VscTriangleUp className="filter-inner-beltOptions-beltTriangle" />
        <div className="filter-inner-beltOptions-belts">
          {filterBeltConfig.map(({ id, title }) => {
            return (
              <div
                className="filter-inner-beltOptions-belts-item"
                key={id}
                onClick={() => {
                  selectType("belt", title[lang]);
                }}
                style={
                  filterData.belt === title[lang] ? activeOptionStyles : {}
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

export default BeltsFilter;
