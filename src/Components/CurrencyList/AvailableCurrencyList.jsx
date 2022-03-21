import AvailableCurrencyListItem from "./AvailableCurrencyListItem";
import { makeDisplayCurrencies } from "../../helper";

const AvailableCurrencyList = ({ availableCurrencies, code }) => {
  const displayedCurrencies = makeDisplayCurrencies(availableCurrencies);
  const elms = displayedCurrencies.map(({ code, displayedStr }) => (
    <AvailableCurrencyListItem {...{ key: code, code, displayedStr }} />
  ));

  return <select value={code}>{elms}</select>;
};

export default AvailableCurrencyList;
