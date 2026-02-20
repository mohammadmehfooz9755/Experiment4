import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Products() {
  const { dispatch } = useContext(AppContext);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      image: "https://source.unsplash.com/600x400/?headphones"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 4999,
      image: "https://source.unsplash.com/600x400/?smartwatch"
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 1299,
      image: "https://source.unsplash.com/600x400/?gaming-mouse"
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 3499,
      image: "https://source.unsplash.com/600x400/?mechanical-keyboard"
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 1999,
      image: "https://source.unsplash.com/600x400/?bluetooth-speaker"
    },
    {
      id: 6,
      name: "Running Shoes",
      price: 3999,
      image: "https://source.unsplash.com/600x400/?running-shoes"
    }
  ];

  return (
    <Container className="fade-in">
      <h2 className="text-center mb-5">Featured Products</h2>

      <Row>
        {products.map(product => (
          <Col md={4} className="mb-4" key={product.id}>
            <div className="glass-card p-3 text-center slide-up">
              <img
                src={product.image}
                alt={product.name}
                className="product-img w-100 mb-3"
              />

              <h5>{product.name}</h5>
              <p className="fw-bold text-info">₹ {product.price}</p>

              <Button
                className="btn-gradient"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product
                  })
                }
              >
                Add to Cart
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;