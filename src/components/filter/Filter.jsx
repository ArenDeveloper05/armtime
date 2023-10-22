import Container from "../container/Container";
import WatchesFilter from "./watches-filter/WatchesFilter";
import "./Filter.scss";
import BeltsFilter from "./belts-filter/BeltsFilter";
import { useRef, useState } from "react";
import useOutsideClick from "../../utils/hooks/useOutsideClick";

const Filter = () => {
  const [filterOpen, setFilterOpen] = useState({
    beltOpen: false,
    watchOpen: false,
  });

  const refWatch = useRef(null);
  const refBelt = useRef(null);
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

  return (
    <div className="filter">
      <Container>
        <div className="filter-inner">
          <div ref={refWatch}>
            <WatchesFilter
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
            />
          </div>
          <div ref={refBelt}>
            <BeltsFilter
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Filter;
