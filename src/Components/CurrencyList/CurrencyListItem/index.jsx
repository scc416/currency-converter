import AvailableCurrencyList from "./AvailableCurrencyList";
import ValueInput from "../ValueInput";

const CurrencyListItem = ({
  availableCurrencies,
  code,
  value,
  updateCurrency,
  updateValue,
  deleteCurrency
}) => {
  return (
    <div className="CurrencyListItem">
      <AvailableCurrencyList
        {...{ availableCurrencies, code, updateCurrency }}
      />
      <ValueInput {...{ value, updateValue, deleteCurrency }} />
    </div>
  );
};

export default CurrencyListItem;
