import { createContext } from "react";
import BaseSingleDesc from "./base-single-desc/BaseSingleDesc";
import BaseSingleImage from "./base-single-image/BaseSingleImage";

import "./BaseSingle.scss";
import BaseSingleFeatures from "./base-single-desc/base-single-features/BaseSingleFeatures";
import BaseSingleDescraption from "./base-single-desc/base-single-descraption/BaseSingleDescraption";

export const BaseSingleContext = createContext(null);
const BaseSingle = ({
  images,
  title,
  code,
  price,
  description,
  type,
  sex,
  movement_type,
  case_material,
  case_size,
  case_thickness,
  band_material,
  water_resistant,
  weight,
  id,
  video,
  item,
  material,
  sizes,
}) => {
  return (
    <div className="base-single">
      <BaseSingleContext.Provider
        value={{
          images,
          title,
          code,
          price,
          description,
          type,
          sex,
          movement_type,
          case_material,
          case_size,
          case_thickness,
          band_material,
          water_resistant,
          weight,
          id,
          video,
          item,
          material,
          sizes,
        }}
      >
        <BaseSingleImage images={images} video={video} />
        <BaseSingleDesc type={type} watchData={item} />
        <div className="base-single-image-featMob">
          <BaseSingleFeatures
            featuresData={{
              type,
              sex,
              case_material,
              case_size,
              case_thickness,
              band_material,
              water_resistant,
              weight,
              material,
              sizes,
            }}
          />
          <BaseSingleDescraption description={description} />
        </div>
      </BaseSingleContext.Provider>
    </div>
  );
};

export default BaseSingle;
