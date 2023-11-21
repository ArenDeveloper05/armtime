import { RiEqualizerLine } from "react-icons/ri";
import { filterSelectBeltConfig, filterBeltConfig } from "../../../config";
import { VscTriangleUp } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

const activeOptionStyles = {
  backgroundColor: "#e0e0e0",
  color: "#090606",
  border: "1px solid #f6f9fc",
};

const BeltsFilter = ({
  filterOpen,
  setFilterOpen,
  filterData,
  setFilterData,
  lang,
  implementBeltFilter,
}) => {
  const { t } = useTranslation();

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
            beltOpen: !filterOpen.beltOpen,
            watchOpen: false,
          });
        }}
      >
        <RiEqualizerLine />
        <span>{filterSelectBeltConfig[lang]}</span>

        <div
          className="filter-inner-beltOptions"
          style={{ display: filterOpen.beltOpen ? "flex" : "none" }}
          onClick={(e) => e.stopPropagation()}
        >
          <VscTriangleUp className="filter-inner-beltOptions-beltTriangle" />
          <div className="filter-inner-beltOptions-belts">
            {filterBeltConfig &&
              filterBeltConfig.map(({ id, title, type }) => {
                return (
                  <div
                    className="filter-inner-beltOptions-belts-item"
                    key={id}
                    onClick={() => {
                      selectType("belt", type);
                    }}
                    style={filterData.belt === type ? activeOptionStyles : {}}
                  >
                    {title[lang]}
                  </div>
                );
              })}
          </div>
          <button
            onClick={() => {
              implementBeltFilter();
            }}
          >
            {t("filter")}
          </button>
        </div>
      </div>
    </>
  );
};

export default BeltsFilter;
