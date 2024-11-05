import React from "react";
import { Switch } from "antd";
import { useTheme } from "../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return <Switch checked={isDarkMode} onChange={toggleDarkMode} />;
};

export default ThemeSwitcher;
