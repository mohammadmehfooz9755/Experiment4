import { Routes, Route, useLocation } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Analytics from "./pages/Analytics";

function App() {
  const location = useLocation();

  return (
    <div className="app-wrapper">
      {/* Animated Background */}
        <div className="animated-bg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      <AppNavbar />

      <main className="app-content page" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </main>

      <AppFooter />
    </div>
  );
}

export default App;