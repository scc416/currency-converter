import "./Currency.css";
import CurrencyListItem from "./CurrencyListItem";
import Contorl from "./Control";
import useData from "../../hooks/useData";

const CurrencyList = () => {
  const {
    availableCurrencies,
    currencies,
    updateSelectedCurrencies,
    updateValue,
    addCurrency,
    deleteCurrency,
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
      {elms} <Control addCurrency={addCurrency} />
    </div>
  );
};

export default CurrencyList;
