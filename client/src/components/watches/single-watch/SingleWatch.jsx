import { useParams } from "react-router-dom";
import { getSingleWatch } from "../../../api/api";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import BaseSingle from "../../common/base-single/BaseSingle";

import "./SingleWatch.scss";
import Loading from "../../loading/Loading";

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
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [id]);

  useEffect(() => {
    console.log(watchData);
  }, [watchData]);

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
          case_material={watchData.case_material}
          case_size={watchData.case_size}
          case_thickness={watchData.case_thickness}
          band_material={watchData.band_material}
          water_resistant={watchData.water_resistant}
          weight={watchData.weight}
          id={id}
          item={watchData}
        />
      )}
      {loading && <Loading />}
      {error && "error"}
    </div>
  );
};

export default SingleWatch;
