import "./Currency.css";
import CurrencyListItem from "./CurrencyListItem";
import AddCurrencyButtom from "./AddCurrencyButton";
import useData from "../../hooks/useData";

const CurrencyList = () => {
  const {
    availableCurrencies,
    currencies,
    updateSelectedCurrencies,
    updateValue,
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
      }}
    />
  ));

  return (
    <div className="CurrencyList">
      {elms} <AddCurrencyButtom />
    </div>
  );
};

export default CurrencyList;
