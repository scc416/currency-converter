import DeleteCurrencyButton from "./DeleteCurrencyButton";
import AvailableCurrencyList from "./AvailableCurrencyList";

const CurrencyListItem = () => {
  return (
    <div className="CurrencyListItem">
      <AvailableCurrencyList />
      <input />
      <DeleteCurrencyButton />
    </div>
  );
};

export default CurrencyListItem;
