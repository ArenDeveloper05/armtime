import Container from "../container/Container";
import WatchesFilter from "./watches-filter/WatchesFilter";
import "./Filter.scss";
import BeltsFilter from "./belts-filter/BeltsFilter";

const Filter = () => {
  return (
    <div className="filter">
      <Container>
        <div className="filter-inner">
          <WatchesFilter />
          <BeltsFilter />
        </div>
      </Container>
    </div>
  );
};

export default Filter;
