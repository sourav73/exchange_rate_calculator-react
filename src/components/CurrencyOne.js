import { useState } from 'react';
import CurrencyList from './CurrencyList';
const Currencies = ({ baseAmount, setBaseAmount, setBaseCurrency }) => {
  const [currencyAmount, setAmount] = useState(baseAmount);

  const handleAmountChange = (e) => {
    const amount = e.target.value;
    setAmount(amount);
    setBaseAmount(amount);
  }
  return (
    <div className="currency">
      <CurrencyList defaultCurrency={'USD'} setChangedCurrency={setBaseCurrency} />
      <input type="number" id="amount-one" placeholder="0" min="1" value={currencyAmount} onChange={handleAmountChange} />
    </div>
  );
}

export default Currencies;