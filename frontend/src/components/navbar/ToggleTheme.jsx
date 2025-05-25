import { useTheme } from '../../context/ThemeContext';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  const lightIcon = "bi-sun";
  const darkIcon = "bi-moon";

  return (
    <button className="btn btn-primary" onClick={toggleTheme}>
      <i className={`bi ${theme === 'dark' ? lightIcon : darkIcon}`}></i>
    </button>
  );
}
export default ToggleTheme