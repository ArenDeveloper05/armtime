//Scss
import "./Filter.scss";
//Container
import Container from "../container/Container";
//React
import { useRef, useState } from "react";
import { useEffect } from "react";
//Redux
import { useDispatch } from "react-redux";
import { filterWatches } from "../../redux/slices/watchesSlice";
import { filterBelts } from "../../redux/slices/beltsSlice";
//Icons
import { TbCurrencyDram } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
//Components
import WatchesFilter from "./watches-filter/WatchesFilter";
import BeltsFilter from "./belts-filter/BeltsFilter";
import useOutsideClick from "../../utils/hooks/useOutsideClick";
import RangeSlider from "./Range-slider/RangeSlider";
//Config
import { filterBeltConfig, filterGenderConfig } from "../../config";

const Filter = ({ filterName }) => {
  const dispatch = useDispatch();
  //states
  const lang = "en";

  const [filterOpen, setFilterOpen] = useState({
    beltOpen: false,
    watchOpen: false,
  });
  //select open
  const [selectOpen, setSelectOpen] = useState(false);
  //select data
  const [priceArrangement, setPriceArrangement] = useState("Newest");
  //price
  const [value, setValue] = useState({ min: 10000, max: 500000 });
  //watch data
  const [filterWatchData, setFilterWatchData] = useState({
    gender: filterGenderConfig[0].title[lang],
    type: filterGenderConfig[0].title[lang],
    price: value,
    arrangement: priceArrangement,
  });
  //belt data
  const [filterBeltData, setFilterBeltData] = useState({
    belt: filterBeltConfig[0].title[lang],
    price: value,
    arrangement: priceArrangement,
  });

  //useEffect
  useEffect(() => {
    if (filterName === "watches") {
      setFilterWatchData((prev) => {
        return {
          ...prev,
          price: value,
          arrangement: priceArrangement,
        };
      });
    } else {
      setFilterBeltData((prev) => {
        return {
          ...prev,
          price: value,
          arrangement: priceArrangement,
        };
      });
    }
  }, [value, filterName, priceArrangement]);

  //ref
  const refWatch = useRef(null);
  const refBelt = useRef(null);
  const refPrice = useRef(null);

  useOutsideClick(refWatch, () => {
    if (filterOpen.watchOpen) {
      setFilterOpen((prev) => {
        return {
          ...prev,
          watchOpen: false,
        };
      });
    }
  });

  useOutsideClick(refBelt, () => {
    if (filterOpen.beltOpen) {
      setFilterOpen((prev) => {
        return {
          ...prev,
          beltOpen: false,
        };
      });
    }
  });

  useOutsideClick(refPrice, () => {
    if (selectOpen) {
      setSelectOpen(false);
    }
  });

  //watch filter function
  const implementWatchFilter = () => {
    dispatch(filterWatches(filterWatchData));
  };
  //belt filter function
  const implementBeltFilter = () => {
    dispatch(filterBelts(filterBeltData));
  };

  return (
    <div className="filter">
      <Container>
        <div className="filter-inner">
          {filterName === "watches" ? (
            <div ref={refWatch}>
              <WatchesFilter
                filterOpen={filterOpen}
                setFilterOpen={setFilterOpen}
                filterData={filterWatchData}
                setFilterData={setFilterWatchData}
                lang={lang}
                implementWatchFilter={implementWatchFilter}
              />
            </div>
          ) : (
            ""
          )}
          {filterName === "belts" ? (
            <div ref={refBelt}>
              <BeltsFilter
                filterOpen={filterOpen}
                setFilterOpen={setFilterOpen}
                filterData={filterBeltData}
                setFilterData={setFilterBeltData}
                lang={lang}
                implementBeltFilter={implementBeltFilter}
              />
            </div>
          ) : (
            ""
          )}
          <div className="filter-inner-rangeSlider">
            <div className="filter-inner-rangeSlider-value">
              {value.min}
              <TbCurrencyDram />
            </div>
            <RangeSlider
              min={10000}
              max={500000}
              step={10000}
              value={value}
              onChange={setValue}
            />

            <div className="filter-inner-rangeSlider-value">
              {value.max}
              <TbCurrencyDram />
            </div>
          </div>
          <div
            className="filter-inner-selection"
            onClick={() => setSelectOpen((prev) => !prev)}
            ref={refPrice}
          >
            <div className="filter-inner-selection-select">
              <div>{priceArrangement}</div>
              <div className="filter-inner-selection-select-icn">
                <IoIosArrowDown
                  style={{
                    transform: selectOpen ? "rotate(-180deg)" : "",
                    transition: "transform .2s linear",
                  }}
                />
              </div>
            </div>

            {selectOpen && (
              <div className="filter-inner-selection-options">
                <div
                  className="filter-inner-selection-options-option"
                  onClick={() => {
                    setPriceArrangement("Newest");
                  }}
                >
                  Newest
                </div>
                <div
                  className="filter-inner-selection-options-option"
                  onClick={() => setPriceArrangement("Prices descending")}
                >
                  Prices descending
                </div>
                <div
                  className="filter-inner-selection-options-option"
                  onClick={() => {
                    setPriceArrangement("Prices ascending");
                  }}
                >
                  Prices ascending
                </div>
              </div>
            )}
          </div>
          {/* <button
            onClick={() => {
              filterName === "watches"
                ? implementWatchFilter()
                : implementBeltFilter();
            }}
          >
            filter
          </button> */}
        </div>
      </Container>
    </div>
  );
};

export default Filter;
