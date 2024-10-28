import { useState } from 'react';

const FinanceCalculator = () => {
  type Currency = 'usd' | 'kzt' | 'eur';
  const [currency, setCurrency] = useState<Currency>('kzt');
  const [deposit, setDeposit] = useState(5000);
  const [time, setTime] = useState(12);
  const [capitalization, setCapitalization] = useState(false);

  const rate = 0.13; // 13% annual rate

  const minMaxValues = {
    kzt: { min: 5000, max: 10000000 },
    usd: { min: 100, max: 100000 },
    eur: { min: 100, max: 90000 },
  };

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount);

  const calculateReward = () => {
    const totalPeriods = time / 12;
    const depositRate = capitalization
      ? Math.pow(1 + rate / 12, time) - 1
      : rate * totalPeriods;
    return deposit * depositRate;
  };

  const calculateTotal = () => deposit + calculateReward();

  return (
    <div
      className="my-24 finance-calculator-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 sm:p-8 px-4 sm:px-12 rounded-lg shadow-lg flex flex-col sm:flex-row text-white w-full max-w-md sm:max-w-3xl"
      style={{
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      {/* Left side - Inputs */}
      <div className="inputs w-full sm:w-1/2 pr-0 sm:pr-4 mb-4 sm:mb-0">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Finance Calculator</h2>

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
          min={minMaxValues[currency].min}
          max={minMaxValues[currency].max}
          value={deposit || ''}
          onChange={(e) => {
            const value = e.target.value;
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
        className="results w-full sm:w-1/2 pl-0 sm:pl-4 p-4 rounded text-white"
        style={{
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold">Results</h3>
        <p className="mb-2">Interest Rate: 13%</p>
        <p className="mb-2">Deposit Amount: {formatCurrency(deposit)}</p>
        <p className="mb-2">Reward: {formatCurrency(calculateReward())}</p>
        <p>Total Amount: {formatCurrency(calculateTotal())}</p>
      </div>
    </div>
  );
};

export default FinanceCalculator;
