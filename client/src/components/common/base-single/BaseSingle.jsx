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
  deliveryInfo,
  type,
  sex,
  movement_type,
  case_material,
  case_size,
  case_thickness,
  band_material,
  water_resistant,
  weight,
}) => {
  return (
    <div className="base-single">
      <BaseSingleContext.Provider
        value={{
          images,
          title,
          code,
          price,
          deliveryInfo,
          type,
          sex,
          movement_type,
          case_material,
          case_size,
          case_thickness,
          band_material,
          water_resistant,
          weight,
        }}
      >
        <BaseSingleImage images={images} />
        <BaseSingleDesc type={type} />
      </BaseSingleContext.Provider>
    </div>
  );
};

export default BaseSingle;
