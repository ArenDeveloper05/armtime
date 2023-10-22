import Container from "../container/Container";
import WatchesFilter from "./watches-filter/WatchesFilter";
import "./Filter.scss";
import BeltsFilter from "./belts-filter/BeltsFilter";
import { useState } from "react";

const Filter = () => {
  const [filterOpen, setFilterOpen] = useState({
    beltOpen: false,
    watchOpen: false,
  });

  return (
    <div className="filter">
      <Container>
        <div className="filter-inner">
          <WatchesFilter
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
          />
          <BeltsFilter filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
        </div>
      </Container>
    </div>
  );
};

export default Filter;
