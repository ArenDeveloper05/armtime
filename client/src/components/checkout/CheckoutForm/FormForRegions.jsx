import { useContext, useEffect } from "react";
import { CheckoutContext } from "../Checkout";
import { useTranslation } from "react-i18next";

const FormForRegions = () => {
  const { checkoutData, inputOnChangeWithNesteds, clearShippingInfo } =
    useContext(CheckoutContext);
  const { t } = useTranslation();

  useEffect(() => {
    clearShippingInfo("yerevan");
  }, []);

  return (
    <form className="information-formForRegions">
      <div className="information-formForRegions-address">
        <label
          htmlFor="state"
          className="information-formForRegions-address-state"
        >
          {t("main.main_putOrder.Region/City/Village")}
        </label>
        <input
          type="text"
          id="state"
          value={checkoutData.regions.state_village_city}
          onChange={(e) => {
            inputOnChangeWithNesteds(
              "regions",
              "state_village_city",
              e.target.value
            );
          }}
        />
      </div>
      <div className="information-formForRegions-address">
        <label htmlFor="zip" className="information-formForRegions-address-zip">
          {t("main.main_putOrder.Zip/Postal_Code")}
        </label>
        <input
          type="text"
          id="zip"
          value={checkoutData.regions.postal_code}
          onChange={(e) => {
            inputOnChangeWithNesteds("regions", "postal_code", e.target.value);
          }}
        />
      </div>
      <div className="information-formForRegions-address">
        <label
          htmlFor="address"
          className="information-formForRegions-address-adr"
        >
          {t("main.main_putOrder.Address")}
        </label>
        <input
          type="text"
          id="address"
          value={checkoutData.regions.address}
          onChange={(e) => {
            inputOnChangeWithNesteds("regions", "address", e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default FormForRegions;
