import AvailableCurrencyList from "./AvailableCurrencyList";
import Input from "./Input";
import DeleteCurrencyButton from "./DeleteCurrencyButton";

const CurrencyListItem = ({
  availableCurrencies,
  code,
  value,
  updateCurrency,
  updateValue,
  deleteCurrency,
}) => {
  return (
    <div className="CurrencyListItem">
      <AvailableCurrencyList
        {...{ availableCurrencies, code, updateCurrency }}
      />
      <Input {...{ value, updateValue }} />
      <DeleteCurrencyButton deleteCurrency={deleteCurrency} />
    </div>
  );
};

export default CurrencyListItem;
