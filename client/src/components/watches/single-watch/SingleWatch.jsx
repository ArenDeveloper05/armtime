import { useParams } from "react-router-dom";
import { getSingleWatch } from "../../../api/api";
import useFetch from "../../../hooks/useFetch";

import BaseSingle from "../../common/base-single/BaseSingle";

import "./SingleWatch.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const SingleWatch = () => {
  const { id } = useParams();
  const [watchData, setWatchData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const {
    i18n: { language },
  } = useTranslation();

  console.log(id);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await getSingleWatch(id);
        setWatchData(data.message);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    console.log(watchData);
  }, [watchData]);

  return (
    <div className="single-watch">
      {Object.keys(watchData).length !== 0 && (
        <BaseSingle
          images={watchData.image}
          title={watchData[`name_${language}`]}
          price={watchData.discounted_price}
          deliveryInfo={watchData[`desc_${language}`]}
          type={watchData.type}
        />
      )}
      {loading && <h1>Loading...</h1>}
      {error && error}
    </div>
  );
};

export default SingleWatch;
