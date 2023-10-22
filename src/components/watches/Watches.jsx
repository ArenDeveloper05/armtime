import Container from "../container/Container";
import "./Watches.scss";
import WatchesList from "./watches-list/WatchesList";

const Watches = () => {
  return (
    <section className="watches">
      <Container>
        {/* <WatchesFilter /> */}
        <WatchesList />
      </Container>
    </section>
  );
};

export default Watches;
