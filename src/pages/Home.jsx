import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <Container className="fade-in">
      <Row className="align-items-center min-vh-75">
        <Col md={6}>
          <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
            Discover <span style={{ color: "#ff4ecd" }}>Next-Gen</span> Shopping
          </h1>

          <p className="mt-4 text-muted">
            A modern e-commerce platform built using React, Context API,
            Reducers, performance optimization, and animated UI.
          </p>

          <Button className="btn-gradient mt-3">
            Browse Products
          </Button>
        </Col>

        <Col md={6} className="text-center">
          <img
            src="https://picsum.photos/600/400?random=1"
            alt="Shopping Illustration"
            className="img-fluid rounded-4 shadow-lg slide-up"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;