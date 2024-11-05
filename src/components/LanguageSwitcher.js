import React from "react";
import { Select } from "antd";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { changeLanguage } = useLanguage();

  return (
    <Select defaultValue="en" onChange={changeLanguage} style={{ width: 120 }}>
      <Select.Option value="en">English</Select.Option>
      <Select.Option value="es">Español</Select.Option>
    </Select>
  );
};

export default LanguageSwitcher;
