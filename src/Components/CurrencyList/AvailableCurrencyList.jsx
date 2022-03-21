import Select from "react-select";
import { makeDisplayCurrencies, findCurrencyObj } from "../../helper";
import useFocus from "../../hooks/useFocus";
const AvailableCurrencyList = ({ availableCurrencies, code: selectedCode }) => {
  const { focused, onFocus, onBlur } = useFocus();

  const displayedCurrencies = makeDisplayCurrencies(availableCurrencies);
  const options = displayedCurrencies.map(({ code, displayedStr }) => {
    const displayText =
      selectedCode === code && !focused
        ? displayedStr.slice(0, 8)
        : displayedStr;
    return { value: code, label: displayText };
  });

  const value = findCurrencyObj(options, selectedCode);

  return (
    <Select
      {...{
        value,
        options,
        isSearchable: true,
        onMenuOpen: onFocus,
        onMenuClose: onBlur,
      }}
    />
  );
};

export default AvailableCurrencyList;
