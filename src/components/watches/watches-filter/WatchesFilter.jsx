import { RiEqualizerLine } from "react-icons/ri";
import { filterSelectConfig, filterOptionsConfig } from "../../../config";
import { useState } from "react";

const WatchesFilter = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div className="watches-filter">
      <div
        className="watches-filter-select"
        onClick={() => {
          setFilterOpen((prev) => !prev);
        }}
      >
        <RiEqualizerLine />
        <span>{filterSelectConfig["hy"]}</span>
      </div>
      <div
        className="watches-filter-options"
        style={{ display: filterOpen ? "flex" : "none" }}
      >
        <div className="traingle"></div>
        <div className="watches-filter-options-gender">
          <div className="watches-filter-options-gender-item">Bolory</div>
          <div className="watches-filter-options-gender-item">Txamardu</div>
          <div className="watches-filter-options-gender-item">Kanaci</div>
        </div>
        <div className="watches-filter-options-types">
          {filterOptionsConfig.map(({ id, title }) => {
            return (
              <div className="watches-filter-options-types-option" key={id}>
                {title["hy"]}
              </div>
            );
          })}
        </div>
        <button>Kirarel filtry</button>
      </div>
    </div>
  );
};

export default WatchesFilter;
