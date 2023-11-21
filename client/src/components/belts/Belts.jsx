import { useDispatch, useSelector } from "react-redux";
import { getBeltsThunk } from "../../redux/slices/beltsSlice";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import BeltsItem from "./belts-item/BeltsItem";
import Filter from "../filter/Filter";

import Loading from "../loading/Loading";
import RequestError from "../errors/request-error/RequestError";
import ReactPaginate from "react-paginate";

import "../../styles/Pagination.css";
import "./Belts.scss";

const Belts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBeltsThunk());
  }, []);

  const { t } = useTranslation();

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
        {currentItems.length === 0 && (
          <h1
            style={{
              fontSize: "60px",
              textAlign: "center",
              color: "#ececec",

              textShadow:
                "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC",
            }}
          >
            {t("not-found")}
          </h1>
        )}
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
