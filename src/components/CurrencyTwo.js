import { useEffect, useState } from "react";
import CurrencyList from "./CurrencyList";

const CurrenciesTwo = ({ setTargetCurrency, convertedAmount }) => {
  const [currencyAmount, setCurrencyAmount] = useState(convertedAmount);
  useEffect(() => {
    setCurrencyAmount(convertedAmount);
  }, [convertedAmount]);
  return (
    <div className="currency">
      <CurrencyList defaultCurrency={'EUR'} setChangedCurrency={setTargetCurrency} />
      <input type="number" id="amount" placeholder="0" readOnly value={currencyAmount} />
    </div>
  );
}

export default CurrenciesTwo;