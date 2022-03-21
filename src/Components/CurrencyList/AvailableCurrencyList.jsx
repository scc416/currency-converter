import AvailableCurrencyListItem from "./AvailableCurrencyListItem";
import { makeDisplayCurrencies } from "../../helper";
import { useState } from "react";

const AvailableCurrencyList = ({ availableCurrencies, code: selectedCode }) => {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const displayedCurrencies = makeDisplayCurrencies(availableCurrencies);
  const elms = displayedCurrencies.map(({ code, displayedStr }) => (
    <AvailableCurrencyListItem
      {...{
        key: code,
        code,
        displayedStr:
          selectedCode === code && !focused
            ? displayedStr.slice(0, 8)
            : displayedStr,
      }}
    />
  ));

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
