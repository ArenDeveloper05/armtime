//Scss
import { Container } from "@mui/material";
import "./Checkout.scss";
import CheckoutPayerShipping from "./CheckoutForm/CheckoutPayerShipping";

const Checkout = () => {
  return (
    <div className="checkout">
      <Container>
        <div className="checkout-inner">
          <h1 className="checkout-inner-title">ORDER FORM</h1>
          <CheckoutPayerShipping />
          <div className="checkout-inner-items"></div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
