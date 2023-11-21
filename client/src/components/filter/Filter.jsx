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
import RangeSlider from "./range-slider/RangeSlider";

import { useTranslation } from "react-i18next";
//Config

import { filterBeltConfig, filterGenderConfig } from "../../config";

const filterSortingData = [
  {
    id: 1,
    translation_key: "main.main_priceFilter.newest",
    type: "newest",
  },
  {
    id: 2,
    translation_key: "main.main_priceFilter.prices_descending",
    type: "descending",
  },
  {
    id: 3,
    translation_key: "main.main_priceFilter.prices_ascending",
    type: "ascending",
  },
];

const Filter = ({ filterName }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  //states
  const {
    i18n: { language },
  } = useTranslation();

  // Filter Sorting

  const [filterSortActive, setFilterSortActive] = useState(
    filterSortingData[0]
  );

  const [filterOpen, setFilterOpen] = useState({
    beltOpen: false,
    watchOpen: false,
  });
  //select open
  const [selectOpen, setSelectOpen] = useState(false);

  //price
  const [value, setValue] = useState({ min: 16000, max: 120000 });
  //watch data
  const [filterWatchData, setFilterWatchData] = useState({
    gender: filterGenderConfig[0].type,
    type: filterGenderConfig[0].type,
    price: value,
    arrangement: filterSortActive.type,
  });
  //belt data
  const [filterBeltData, setFilterBeltData] = useState({
    belt: filterBeltConfig[0].type,
    price: value,
    arrangement: filterSortActive.type,
  });

  //watch filter function
  const implementWatchFilter = () => {
    dispatch(filterWatches(filterWatchData));
  };
  //belt filter function
  const implementBeltFilter = () => {
    dispatch(filterBelts(filterBeltData));
  };

  useEffect(() => {
    if (filterName === "watches") {
      setFilterWatchData((prev) => {
        return {
          ...prev,
          price: value,
          arrangement: filterSortActive.type,
        };
      });
    } else {
      setFilterBeltData((prev) => {
        return {
          ...prev,
          price: value,
          arrangement: filterSortActive.type,
        };
      });
    }
  }, [value, filterName, filterSortActive]);

  //useEffect
  useEffect(() => {
    if (
      window.location.href.includes("watches") ||
      window.location.pathname === "/"
    ) {
      implementWatchFilter();
    } else if (window.location.href.includes("belts")) {
      implementBeltFilter();
    }
  }, [filterSortActive]);

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
                lang={language}
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
                lang={language}
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
              min={16000}
              max={120000}
              step={1000}
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
              <div>{t(filterSortActive["translation_key"])}</div>
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
                {filterSortingData &&
                  filterSortingData.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="filter-inner-selection-options-option"
                        onClick={() => {
                          if (
                            JSON.stringify(filterSortActive) !==
                            JSON.stringify(item)
                          ) {
                            setFilterSortActive(item);

                            filterName === "watches"
                              ? setFilterWatchData((prev) => {
                                  return {
                                    ...prev,
                                    arrangement: item.type,
                                  };
                                })
                              : setFilterBeltData((prev) => {
                                  return {
                                    ...prev,
                                    arrangement: item.type,
                                  };
                                });
                          }
                        }}
                      >
                        {t(item.translation_key)}
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Filter;
