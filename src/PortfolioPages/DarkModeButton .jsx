import { useState, useEffect } from "react";

const DarkModeButton = ({ setOpen }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
    setOpen(false);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button className="darkbtn" onClick={toggleDarkMode}>
      {isDark ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeButton;
