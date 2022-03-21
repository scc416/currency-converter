import DeleteCurrencyButton from "./DeleteCurrencyButton";
import AvailableCurrencyList from "./AvailableCurrencyList";

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
      <div className="CurrencyNumberInput">
        <input value={value} />
        <DeleteCurrencyButton />
      </div>
    </div>
  );
};

export default CurrencyListItem;
