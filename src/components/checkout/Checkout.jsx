//Scss
import { Container } from "@mui/material";
import "./Checkout.scss";
import CheckoutPayerShipping from "./checkoutForm/CheckoutPayerShipping";
import CheckoutItems from "./checkoutItems/CheckoutItems";

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
