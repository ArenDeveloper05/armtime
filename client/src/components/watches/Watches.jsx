import { useEffect, useState } from "react";
import { getWatchesThunk } from "../../redux/slices/watchesSlice";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import Container from "../container/Container";
import Filter from "../filter/Filter";
import WatchesList from "./watches-list/WatchesList";

import Loading from "../loading/Loading";
import RequestError from "../errors/request-error/RequestError";

import "./Watches.scss";
import "../../styles/Pagination.css";
import { useTranslation } from "react-i18next";

const Watches = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWatchesThunk());
  }, [dispatch]);
  const { t } = useTranslation();

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

  return (
    <section className="watches">
      <Container>
        <Filter filterName="watches" />
        {watchesData && watchesData.length !== 0 && currentItems && (
          <WatchesList data={currentItems} />
        )}
        {currentItems.length === 0 && (
          <h1
            style={{
              fontSize: "60px",
              textAlign: "center",
              marginTop: "60px",
              color: "#ececec",

              textShadow:
                "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC",
            }}
          >
            {t("not-found")}
          </h1>
        )}
        {loading && <Loading />}
        {error && <RequestError />}

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
