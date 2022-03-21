import DeleteCurrencyButton from "./DeleteCurrencyButton";
import AvailableCurrencyList from "./AvailableCurrencyList";

const CurrencyListItem = ({ availableCurrencies, code, value }) => {
  return (
    <div className="CurrencyListItem">
      <AvailableCurrencyList {...{ availableCurrencies, code }} />
      <input value={value} />
      <DeleteCurrencyButton />
    </div>
  );
};

export default CurrencyListItem;
