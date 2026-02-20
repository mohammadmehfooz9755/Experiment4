import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function AppNavbar() {
  const { state } = useContext(AppContext);

  return (
    <Navbar expand="lg" className="py-3 fade-in">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ fontWeight: "700", fontSize: "1.4rem", color: "#ff4ecd" }}
        >
          ShopEase
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center gap-4">
          <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
          <Nav.Link as={Link} to="/products" className="text-light">Products</Nav.Link>
          <Nav.Link as={Link} to="/analytics" className="text-light">Analytics</Nav.Link>

          <Nav.Link as={Link} to="/cart" className="text-light">
            Cart{" "}
            <Badge bg="dark" pill>
              {state.cart.length}
            </Badge>
          </Nav.Link>

          <ThemeToggle />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;