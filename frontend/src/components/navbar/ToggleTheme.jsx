import { useTheme } from '../../context/ThemeContext';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  const lightIcon = "bi-sun";
  const darkIcon = "bi-moon";

  return (
    <i className={`bi ${theme === 'dark' ? lightIcon : darkIcon}`} onClick={toggleTheme}></i>
  );
}
export default ToggleTheme