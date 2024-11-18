import React, { useState } from "react";
import { Input, Button } from "antd";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleConversion = () => {
    // Assume a static conversion rate for demonstration
    const conversionRate = 1.2; // Example rate from USD to EUR
    setConvertedAmount(amount * conversionRate);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount in USD"
      />
      <Button onClick={handleConversion}>Convert</Button>
      <h3>Converted Amount: {convertedAmount} EUR</h3>
    </div>
  );
};

export default CurrencyConverter;
