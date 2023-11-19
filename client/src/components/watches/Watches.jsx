import { useEffect } from "react";
import { getWatchesThunk } from "../../redux/slices/watchesSlice";
import { useDispatch, useSelector } from "react-redux";

import Container from "../container/Container";
import Filter from "../filter/Filter";
import WatchesList from "./watches-list/WatchesList";

import Loading from "../loading/Loading";

import "./Watches.scss";

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
        {loading && <Loading />}
        {error && <h1>Error</h1>}
      </Container>
    </section>
  );
};

export default Watches;
