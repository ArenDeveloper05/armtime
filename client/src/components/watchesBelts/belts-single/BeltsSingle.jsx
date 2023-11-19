import { useEffect, useState } from "react";
import BaseSingle from "../../common/base-single/BaseSingle";
import { getSingleBelt } from "../../../api/api";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import "./BeltsSingle.scss";

const BeltsSingle = () => {
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
        const { data } = await getSingleBelt(id);
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
          price={beltData.discounted_price}
          deliveryInfo={beltData[`desc_${language}`]}
          type={beltData.type}
        />
      )}
      {loading && <h1>Loading...</h1>}
      {error && error}
    </div>
  );
};

export default BeltsSingle;
