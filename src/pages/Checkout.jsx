import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Checkout({ cartCount }) {
  return (
    <Container className="my-5 text-center">
      <h2>Checkout</h2>

      {cartCount === 0 ? (
        <p className="mt-3">Your cart is empty.</p>
      ) : (
        <>
          <p className="mt-3">
            You have <strong>{cartCount}</strong> item(s) in your cart.
          </p>
          <Button variant="success">Proceed to Payment</Button>
        </>
      )}
    </Container>
  );
}

export default Checkout;
