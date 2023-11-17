import { useParams } from "react-router-dom";
import { getSingleWatch } from "../../../api/api";
import useFetch from "../../../hooks/useFetch";

import BaseSingle from "../../common/base-single/BaseSingle";

import "./SingleWatch.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const SingleWatch = () => {
  const { id } = useParams();
  const [beltData, setBeltData] = useState({});
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
        setBeltData(data.message);
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
    console.log(beltData);
  }, [beltData]);

  return (
    <div className="single-watch">
      {Object.keys(beltData).length !== 0 && (
        <BaseSingle
          images={beltData.image}
          title={beltData[`name_${language}`]}
          code={"A0001140-1"}
          price={beltData.discounted_price}
          deliveryInfo={beltData[`desc_${language}`]}
          type={beltData.type}
        />
      )}
    </div>
  );
};

export default SingleWatch;
