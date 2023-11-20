import { useDispatch, useSelector } from "react-redux";
import { getBeltsThunk } from "../../redux/slices/beltsSlice";
import { useEffect, useState } from "react";

import BeltsItem from "./belts-item/BeltsItem";
import Filter from "../filter/Filter";

import Loading from "../loading/Loading";
import RequestError from "../errors/requestError/RequestError";
import ReactPaginate from "react-paginate";

import "./Belts.scss";
import "../../styles/Pagination.css";

const Belts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBeltsThunk());
  }, []);

  const beltsData = useSelector((state) => state.belts.filterList);
  const loading = useSelector((state) => state.belts.beltListLoading);
  const error = useSelector((state) => state.belts.beltListError);

  let itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = beltsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(beltsData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % beltsData.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="belts">
      <Filter filterName="belts" />
      <div className="belts-list">
        {currentItems &&
          currentItems.map((item) => {
            return <BeltsItem key={item.id} item={item} />;
          })}
        {loading && <Loading />}
        {error && <RequestError />}
      </div>
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
    </div>
  );
};

export default Belts;
