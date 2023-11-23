import { createContext } from "react";
import BaseSingleDesc from "./base-single-desc/BaseSingleDesc";
import BaseSingleImage from "./base-single-image/BaseSingleImage";

import "./BaseSingle.scss";

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
        <BaseSingleDesc
          type={type}
          case_material={case_material}
          sex={sex}
          case_size={case_size}
          case_thickness={case_thickness}
          band_material={band_material}
          water_resistant={water_resistant}
          weight={weight}
          material={material}
          sizes={sizes}
          description={description}
          watchData={item}
        />
      </BaseSingleContext.Provider>
    </div>
  );
};

export default BaseSingle;
