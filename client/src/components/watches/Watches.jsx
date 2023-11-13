import { useEffect } from "react";
import { getWatchesThunk } from "../../redux/slices/watchesSlice";

import Container from "../container/Container";
import Filter from "../filter/Filter";
import WatchesList from "./watches-list/WatchesList";

import "./Watches.scss";
import { useDispatch, useSelector } from "react-redux";

const Watches = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWatchesThunk());
  }, []);

  const watchesData = useSelector((state) => state.watches.filterList);
  const loading = useSelector((state) => state.watches.watchListLoading);
  const error = useSelector((state) => state.watches.watchListError);

  console.log(watchesData);

  return (
    <section className="watches">
      <Container>
        <Filter filterName="watches" />
        {watchesData && watchesData.length !== 0 && (
          <WatchesList data={watchesData} />
        )}
        {loading && <h1>Loading</h1>}
        {error && <h1>Error</h1>}
      </Container>
    </section>
  );
};

export default Watches;
