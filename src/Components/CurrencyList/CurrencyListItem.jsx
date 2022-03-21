import DeleteCurrencyButton from "./DeleteCurrencyButton";
import AvailableCurrencyList from "./AvailableCurrencyList";

const CurrencyListItem = ({ availableCurrencies, code, value }) => {
  return (
    <div className="CurrencyListItem">
      <AvailableCurrencyList {...{ availableCurrencies, code }} />
      <div className="CurrencyNumberInput">
        <input value={value} />
        <DeleteCurrencyButton />
      </div>
    </div>
  );
};

export default CurrencyListItem;
