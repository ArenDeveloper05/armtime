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

import { useTranslation } from "react-i18next";
//Config

import { filterBeltConfig, filterGenderConfig } from "../../config";

const Filter = ({ filterName }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  //states
  const {
    i18n: { language },
  } = useTranslation();

  const [filterOpen, setFilterOpen] = useState({
    beltOpen: false,
    watchOpen: false,
  });
  //select open
  const [selectOpen, setSelectOpen] = useState(false);
  //select data
  const [priceArrangement, setPriceArrangement] = useState(
    t("main.main_priceFilter.newest")
  );

  //price
  const [value, setValue] = useState({ min: 10000, max: 500000 });
  //watch data
  const [filterWatchData, setFilterWatchData] = useState({
    gender: filterGenderConfig[0].type,
    type: filterGenderConfig[0].type,
    price: value,
    arrangement: priceArrangement,
  });
  //belt data
  const [filterBeltData, setFilterBeltData] = useState({
    belt: filterBeltConfig[0].title[language],
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
                    setPriceArrangement(t("main.main_priceFilter.newest"));
                  }}
                >
                  {t("main.main_priceFilter.newest")}
                </div>
                <div
                  className="filter-inner-selection-options-option"
                  onClick={() =>
                    setPriceArrangement(
                      t("main.main_priceFilter.prices_descending")
                    )
                  }
                >
                  {t("main.main_priceFilter.prices_descending")}
                </div>
                <div
                  className="filter-inner-selection-options-option"
                  onClick={() => {
                    setPriceArrangement(
                      t("main.main_priceFilter.prices_ascending")
                    );
                  }}
                >
                  {t("main.main_priceFilter.prices_ascending")}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Filter;
