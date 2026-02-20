import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Button from "react-bootstrap/Button";

function ThemeToggle() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Button
      variant={state.theme === "light" ? "dark" : "light"}
      size="sm"
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
    >
      {state.theme === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
}

export default ThemeToggle;