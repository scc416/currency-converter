import "./Currency.css";
import CurrencyListItem from "./CurrencyListItem";
import Control from "./Control";
import useData from "../../hooks/useData";

const CurrencyList = () => {
  const {
    availableCurrencies,
    currencies,
    updateSelectedCurrencies,
    updateValue,
    addCurrency,
    deleteCurrency,
    error,
  } = useData();

  const elms = currencies.map(({ code, value }, index) => (
    <CurrencyListItem
      {...{
        key: index,
        availableCurrencies,
        code,
        value,
        updateCurrency: (code) => updateSelectedCurrencies(index, code),
        updateValue: (value) => updateValue(index, value),
        deleteCurrency: () => deleteCurrency(index),
      }}
    />
  ));

  return (
    <div className="CurrencyList">
      {elms} <Control addCurrency={addCurrency} error={error} />
    </div>
  );
};

export default CurrencyList;
