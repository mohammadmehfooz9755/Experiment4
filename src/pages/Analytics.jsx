import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import Container from "react-bootstrap/Container";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function Analytics() {
  const { state } = useContext(AppContext);

  const chartData = useMemo(() => {
    const labels = state.cart.map(item => item.name);
    const prices = state.cart.map(item => item.price);

    return {
      labels,
      datasets: [
        {
          label: "Price (₹)",
          data: prices,
          backgroundColor: [
            "#ff4ecd",
            "#00e5ff",
            "#7c4dff",
            "#ff9100",
            "#00e676"
          ]
        }
      ]
    };
  }, [state.cart]);

  const summary = useMemo(() => ({
    totalItems: state.cart.length,
    totalPrice: state.cart.reduce((sum, item) => sum + item.price, 0)
  }), [state.cart]);

  return (
    <Container className="fade-in">
      <h2 className="mb-4">Analytics Dashboard</h2>

      <div className="glass-card p-4 mb-5">
        <h5>Cart Summary</h5>
        <p>Total Items: <strong>{summary.totalItems}</strong></p>
        <p>Total Value: <strong>₹ {summary.totalPrice}</strong></p>
      </div>

      {state.cart.length > 0 ? (
        <div className="glass-card p-4">
          <h5 className="mb-4">Price Distribution</h5>
          <Bar data={chartData} />
        </div>
      ) : (
        <p>Add products to cart to view analytics.</p>
      )}
    </Container>
  );
}

export default Analytics;