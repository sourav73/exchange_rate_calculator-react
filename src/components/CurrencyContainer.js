import { useEffect, useState } from "react";
import CurrencyOne from "./CurrencyOne";
import CurrencyTwo from "./CurrencyTwo";

const CurrencyContainer = (props) => {
  const { data, setUrl } = props;
  const [baseAmount, setBaseAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [conversionRate, setConversionRate] = useState(data.rates[targetCurrency]);


  useEffect(() => {
    setUrl(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
    setConversionRate(data.rates[targetCurrency]);
  }, [baseCurrency, setUrl, data.rates, targetCurrency]);

  useEffect(() => {
    setConvertedAmount((baseAmount * conversionRate).toFixed(2));
  }, [baseAmount, conversionRate]);


  return (
    <div className="currency-container">
      <div className="rate" id="rate">{`1 ${baseCurrency} = ${conversionRate} ${targetCurrency}`}</div>
      <CurrencyOne setBaseCurrency={setBaseCurrency} baseAmount={baseAmount} setBaseAmount={setBaseAmount} />
      <CurrencyTwo targetCurrency={targetCurrency} setTargetCurrency={setTargetCurrency} convertedAmount={convertedAmount} />
    </div>
  );
}

export default CurrencyContainer;