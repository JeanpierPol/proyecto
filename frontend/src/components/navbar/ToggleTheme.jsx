import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const lightIcon = "bi-sun";
  const darkIcon = "bi-moon";

  return (
    <button className="btn btn-outline-secondary" onClick={toggleTheme}>
      <i className={`bi ${theme === 'dark' ? lightIcon : darkIcon }`}></i>
    </button>
  );
}
