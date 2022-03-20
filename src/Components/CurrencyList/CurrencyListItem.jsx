import DeleteCurrencyButton from "./DeleteCurrencyButton";
import AvailableCurrencyList from "./AvailableCurrencyList";

const CurrencyListItem = ({ availableCurrencies }) => {
  return (
    <div className="CurrencyListItem">
      <AvailableCurrencyList {...{ availableCurrencies }} />
      <input />
      <DeleteCurrencyButton />
    </div>
  );
};

export default CurrencyListItem;
