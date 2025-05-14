const themeColors = [
  "warning",
  "danger",
  "secondary",
  "primary",
  "info",
  "success",
];
import { useContext } from "react";
import "./ThemeSelector.css";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSelector() {
  const { changeColor, mode, changeMode } = useContext(ThemeContext);

  function toggleMode() {
    changeMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <div className="container theme-selector">
      <div className="mode-toggle">
        <i
          className={`bi bi-moon-stars${mode === "dark" ? "-fill" : ""}`}
          onClick={toggleMode}
        ></i>
      </div>
      <div className="theme-links">
        {themeColors.map((color) => (
          <span
            key={color}
            className={`bg-${color}`}
            onClick={() => changeColor(color)}
          ></span>
        ))}
      </div>
    </div>
  );
}
