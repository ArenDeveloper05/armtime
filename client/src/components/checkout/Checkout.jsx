import { createContext, useState } from "react";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import CheckoutPayerShipping from "./checkout-form/CheckoutPayerShipping";
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

  const [checkoutValidations, setCheckoutValidations] = useState({
    first_name: true,
    last_name: true,
    phone: true,
    yerevan: {
      address: true,
      time: true,
    },
    regions: {
      state_village_city: true,
      postal_code: true,
      address: true,
    },
    shipping: true,
    notes: true,
  });

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

  function checkValidations(checkoutData, obj) {
    for (let key in checkoutData) {
      if (typeof checkoutData[key] === "object") {
        checkValidations(checkoutData[key], obj[key]);
      } else {
        if (!checkoutData[key].trim()) {
          obj[key] = false;
        } else {
          obj[key] = true;
        }
      }
    }
    return obj;
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
              checkValidations,
              checkoutValidations,
              setCheckoutValidations,
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
