import AvailableCurrencyListItem from "./AvailableCurrencyListItem";
import { makeDisplayCurrencies } from "../../helper";
import useFocus from "../../hooks/useFocus";

const AvailableCurrencyList = ({ availableCurrencies, code: selectedCode }) => {
  const { focused, onFocus, onBlur } = useFocus();

  const displayedCurrencies = makeDisplayCurrencies(availableCurrencies);
  const elms = displayedCurrencies.map(({ code, displayedStr }) => {
    const displayText =
      selectedCode === code && !focused
        ? displayedStr.slice(0, 8)
        : displayedStr;

    return <AvailableCurrencyListItem {...{ key: code, code, displayText }} />;
  });

  return (
    <select
      value={selectedCode}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={(e) => e.target.blur()}
    >
      {elms}
    </select>
  );
};

export default AvailableCurrencyList;
