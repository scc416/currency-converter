import AvailableCurrencyListItem from "./AvailableCurrencyListItem";
import { makeDisplayCurrencies } from "../../helper";

const AvailableCurrencyList = ({ availableCurrencies }) => {
  const displayedCurrencies = makeDisplayCurrencies(availableCurrencies);
  const elms = displayedCurrencies.map((currency) => (
    <AvailableCurrencyListItem key={currency} value={currency} />
  ));

  return <select value="grapefruit">{elms}</select>;
};

export default AvailableCurrencyList;
