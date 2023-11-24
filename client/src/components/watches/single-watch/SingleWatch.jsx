import { useParams } from "react-router-dom";
import { getSingleWatch } from "../../../api/api";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import BaseSingle from "../../common/base-single/BaseSingle";

import Loading from "../../loading/Loading";
import RequestError from "../../errors/request-error/RequestError";

import "./SingleWatch.scss";

const SingleWatch = () => {
  const { id } = useParams();
  const [watchData, setWatchData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await getSingleWatch(id);
        setWatchData(data.message);
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
      {Object.keys(watchData).length !== 0 && (
        <BaseSingle
          images={watchData.image}
          video={watchData.video}
          title={watchData[`name_${language}`]}
          price={watchData.discounted_price}
          description={watchData[`desc_${language}`]}
          type={watchData.type}
          sex={watchData.sex}
          case_material={watchData[`case_material_${language}`]}
          case_size={watchData.case_size}
          case_thickness={watchData.case_thickness}
          band_material={watchData[`band_material_${language}`]}
          water_resistant={watchData.water_resistant}
          weight={watchData.weight}
          model={watchData[`model_name_${language}`]}
          id={id}
          item={watchData}
        />
      )}
      {loading && <Loading />}
      {error && <RequestError />}
    </div>
  );
};

export default SingleWatch;
