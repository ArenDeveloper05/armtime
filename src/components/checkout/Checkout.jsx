import { Container } from "@mui/material";
import CheckoutPayerShipping from "./CheckoutForm/CheckoutPayerShipping";
import CheckoutItems from "./checkoutItems/CheckoutItems";

import "./Checkout.scss";

const Checkout = () => {
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
