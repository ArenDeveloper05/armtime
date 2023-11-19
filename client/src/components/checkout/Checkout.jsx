import { createContext, useState } from "react";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import CheckoutPayerShipping from "./CheckoutForm/CheckoutPayerShipping";
import CheckoutItems from "./checkoutItems/CheckoutItems";

import "./Checkout.scss";

export const CheckoutContext = createContext(null);

const Checkout = () => {
  const { t } = useTranslation();

  const [checkoutData, setCheckoutData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    yerevan: {
      address: "",
      time: "12:00 - 18:00",
    },
    regions: {
      state_village_city: "",
      postal_code: "",
      address: "",
    },
    shipping: "yerevan",
    notes: "",
  });

  console.log(checkoutData);

  function inputOnChange(e) {
    setCheckoutData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function inputOnChangeWithNesteds(nestedObj, key, value) {
    setCheckoutData((prev) => {
      return {
        ...prev,
        [nestedObj]: {
          ...prev[nestedObj],
          [key]: value,
        },
      };
    });
  }

  function changeShippingState(val) {
    setCheckoutData((prev) => {
      return {
        ...prev,
        shipping: val,
      };
    });
  }

  function clearShippingInfo(key) {
    if (key === "yerevan") {
      setCheckoutData((prev) => {
        return {
          ...prev,
          yerevan: {
            address: "",
            time: "12:00 - 18:00",
          },
        };
      });
    } else if (key === "regions") {
      setCheckoutData((prev) => {
        return {
          ...prev,
          regions: {
            state_village_city: "",
            postal_code: "",
            address: "",
          },
        };
      });
    }
  }

  return (
    <div className="checkout">
      <Container>
        <div className="checkout-inner">
          <h1 className="checkout-inner-title">{t("checkout.title")}</h1>
          <CheckoutContext.Provider
            value={{
              checkoutData,
              setCheckoutData,
              inputOnChange,
              inputOnChangeWithNesteds,
              clearShippingInfo,
              changeShippingState,
            }}
          >
            <CheckoutPayerShipping />
            <CheckoutItems />
          </CheckoutContext.Provider>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
