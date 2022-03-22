import AvailableCurrencyList from "./AvailableCurrencyList";
import ValueInput from "./ValueInput";

const CurrencyListItem = ({
  availableCurrencies,
  code,
  value,
  updateCurrency,
  updateValue,
}) => {
  return (
    <div className="CurrencyListItem">
      <AvailableCurrencyList
        {...{ availableCurrencies, code, updateCurrency }}
      />
      <ValueInput {...{ value, updateValue }} />
    </div>
  );
};

export default CurrencyListItem;
