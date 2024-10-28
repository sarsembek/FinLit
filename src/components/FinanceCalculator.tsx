import { useState } from 'react';

const FinanceCalculator = () => {
  type Currency = 'usd' | 'kzt' | 'eur';
  const [currency, setCurrency] = useState<Currency>('kzt');
  const [deposit, setDeposit] = useState(5000);
  const [time, setTime] = useState(12);
  const [capitalization, setCapitalization] = useState(false);

  const rate = 0.13; // 13% annual rate

  // Define min/max values for each currency
  const minMaxValues = {
      kzt: { min: 5000, max: 10000000 },
      usd: { min: 100, max: 100000 },
      eur: { min: 100, max: 90000 },
  };

  // Format numbers for readability
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount);

  const calculateReward = () => {
    const totalPeriods = time / 12; // Convert months to years
    const depositRate = capitalization
      ? Math.pow(1 + rate / 12, time) - 1
      : rate * totalPeriods;
    return deposit * depositRate;
  };

  const calculateTotal = () => deposit + calculateReward();

  return (
    <div
      className="finance-calculator-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg shadow-lg flex text-white w-2/3"
      style={{
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      {/* Left side - Inputs */}
      <div className="inputs w-1/2 pr-4">
        <h2 className="text-3xl font-semibold mb-4">Finance Calculator</h2>

        <label className="block mb-2 font-medium">Select Currency:</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as Currency)}
          className="mb-4 p-2 rounded bg-white/20 backdrop-blur-md border border-white/30 text-white w-full"
        >
          <option value="usd">USD</option>
          <option value="kzt">KZT</option>
          <option value="eur">EUR</option>
        </select>

        <label className="block mb-2 font-medium">Deposit Amount:</label>
         <input
           type="number"
           min={minMaxValues[currency as Currency].min}
           max={minMaxValues[currency].max}
           value={deposit || ''}
           onChange={(e) => {
             const value = e.target.value;
             // Set empty if the field is cleared; otherwise, set numeric value without leading zeros
             setDeposit(value ? Number(value.replace(/^0+/, '')) : 0);
           }}
           className="mb-4 p-2 rounded bg-white/20 backdrop-blur-md border border-white/30 text-white w-full"
         />

         <label className="block mb-2 font-medium">Time in Months:</label>
         <input
           type="number"
           value={time || ''}
           min="1"
           max="120"
           onChange={(e) => {
             const value = e.target.value;
             // Set empty if the field is cleared; otherwise, set numeric value
             setTime(value ? Number(value) : 0);
           }}
           className="mb-4 p-2 rounded bg-white/20 backdrop-blur-md border border-white/30 text-white w-full"
         />


        <label className="block mb-2 font-medium">Capitalization of Reward:</label>
        <input
          type="checkbox"
          checked={capitalization}
          onChange={() => setCapitalization(!capitalization)}
          className="mb-4"
        />
      </div>

      {/* Right side - Results */}
      <div
        className="results w-1/2 pl-4 p-4 rounded text-white"
        style={{
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <h3 className="text-2xl font-semibold">Results</h3>
        <p>Interest Rate: 13%</p>
        <p>Deposit Amount: {formatCurrency(deposit)}</p>
        <p>Reward: {formatCurrency(calculateReward())}</p>
        <p>Total Amount: {formatCurrency(calculateTotal())}</p>
      </div>
    </div>
  );
};

export default FinanceCalculator;
