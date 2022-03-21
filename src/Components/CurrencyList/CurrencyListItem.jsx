import AvailableCurrencyList from "./AvailableCurrencyList";
import ValueInput from "./ValueInput";

const CurrencyListItem = ({
  availableCurrencies,
  code,
  value,
  updateCurrency,
}) => {
  return (
    <div className="CurrencyListItem">
      <AvailableCurrencyList
        {...{ availableCurrencies, code, updateCurrency }}
      />
      <ValueInput {...{ value }} />
    </div>
  );
};

export default CurrencyListItem;
