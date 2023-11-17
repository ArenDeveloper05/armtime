import { Container } from "@mui/material";
import CheckoutPayerShipping from "./CheckoutForm/CheckoutPayerShipping";
import CheckoutItems from "./checkoutItems/CheckoutItems";

import "./Checkout.scss";
import { useState } from "react";

const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    yerevan: {
      address: "",
      time: "",
    },
    regions: {
      state_village_city: "",
      postal_code: "",
      address: "",
    },
  });

  function inputOnChange(e) {
    setCheckoutData((prev) => {
      return {
        ...prev,
      };
    });
  }

  return (
    <div className="checkout">
      <Container>
        <div className="checkout-inner">
          <h1 className="checkout-inner-title">ORDER FORM</h1>
          <CheckoutPayerShipping />
          <CheckoutItems />
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
