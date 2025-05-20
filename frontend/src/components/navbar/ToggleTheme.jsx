import { useEffect, useState } from 'react';

export default function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark';
    setDarkMode(prefersDark);
    document.documentElement.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    const newTheme = newDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button className="btn btn-outline-secondary" onClick={toggleTheme}>
      <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
    </button>
  );
}
