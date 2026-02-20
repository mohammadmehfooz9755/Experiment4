import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Cart() {
  const { state, dispatch } = useContext(AppContext);

  const total = useMemo(
    () => state.cart.reduce((sum, item) => sum + item.price, 0),
    [state.cart]
  );

  return (
    <Container className="fade-in">
      <h2 className="mb-4">Cart Overview</h2>

      <div className="glass-card p-4">
        {state.cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {state.cart.map(item => (
              <div key={item.id} className="d-flex justify-content-between mb-3">
                <span>{item.name}</span>
                <span>₹ {item.price}</span>
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                  }
                >
                  Remove
                </Button>
              </div>
            ))}

            <hr />
            <h4>Total: ₹ {total}</h4>

            <Button
              variant="outline-light"
              className="mt-3"
              onClick={() => dispatch({ type: "CLEAR_CART" })}
            >
              Clear Cart
            </Button>
          </>
        )}
      </div>
    </Container>
  );
}

export default Cart;