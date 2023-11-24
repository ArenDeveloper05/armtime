import { useEffect, useState } from "react";
import { getSingleBelt } from "../../../api/api";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import BaseSingle from "../../common/base-single/BaseSingle";
import Loading from "../../loading/Loading";
import RequestError from "../../errors/request-error/RequestError";

import "./BeltsSingle.scss";

const BeltsSingle = () => {
  const { id } = useParams();
  const [beltData, setBeltData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await getSingleBelt(id);
        setBeltData(data.message);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [id]);

  return (
    <div className="single-watch">
      {Object.keys(beltData).length !== 0 && (
        <BaseSingle
          images={beltData.image}
          video={beltData.video}
          title={beltData[`name_${language}`]}
          price={beltData.discounted_price}
          description={beltData[`desc_${language}`]}
          type={beltData.type}
          sex={beltData.sex}
          sizes={beltData.sizes}
          material={beltData[`material_${language}`]}
          item={beltData}
          id={id}
        />
      )}
      {loading && <Loading />}
      {error && <RequestError />}
    </div>
  );
};

export default BeltsSingle;
