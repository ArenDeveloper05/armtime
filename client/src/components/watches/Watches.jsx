import { useEffect, useState } from "react";
import { getWatchesThunk } from "../../redux/slices/watchesSlice";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import Container from "../container/Container";
import Filter from "../filter/Filter";
import WatchesList from "./watches-list/WatchesList";

import Loading from "../loading/Loading";

import "./Watches.scss";
import "../../styles/Pagination.css";

const Watches = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWatchesThunk());
  }, []);

  const watchesData = useSelector((state) => state.watches.filterList);
  const loading = useSelector((state) => state.watches.watchListLoading);
  const error = useSelector((state) => state.watches.watchListError);

  let itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = watchesData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(watchesData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % watchesData.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(watchesData);

  return (
    <section className="watches">
      <Container>
        <Filter filterName="watches" />
        {watchesData && watchesData.length !== 0 && (
          <WatchesList data={currentItems} />
        )}
        {loading && <Loading />}
        {error && <h1>Error</h1>}
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </Container>
    </section>
  );
};

export default Watches;
