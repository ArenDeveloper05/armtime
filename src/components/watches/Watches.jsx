import Container from "../container/Container";
import Filter from "../filter/Filter";
import "./Watches.scss";
import WatchesList from "./watches-list/WatchesList";

const Watches = () => {
  return (
    <section className="watches">
      <Container>
        {/* <WatchesFilter /> */}
        <Filter filterName="watches" />
        <WatchesList />
      </Container>
    </section>
  );
};

export default Watches;
