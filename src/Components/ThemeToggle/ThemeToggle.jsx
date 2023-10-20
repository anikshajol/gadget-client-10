import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeToggle;
