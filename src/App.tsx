import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FinanceCalculatorPage from './FinanceCalculatorPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/finance-calculator" element={<FinanceCalculatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
