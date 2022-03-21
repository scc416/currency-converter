import AvailableCurrencyListItem from "./AvailableCurrencyListItem";
import { makeDisplayCurrencies } from "../../helper";

const AvailableCurrencyList = ({ availableCurrencies, code: selectedCode }) => {
  const displayedCurrencies = makeDisplayCurrencies(availableCurrencies);
  const elms = displayedCurrencies.map(({ code, displayedStr }) => (
    <AvailableCurrencyListItem
      {...{
        key: code,
        code,
        displayedStr:
          selectedCode === code ? displayedStr.slice(0, 8) : displayedStr,
      }}
    />
  ));

  return <select value={selectedCode}>{elms}</select>;
};

export default AvailableCurrencyList;
