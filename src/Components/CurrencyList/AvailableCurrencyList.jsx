import Select from "react-select";
import { makeDisplayCurrencies, findCurrencyObj } from "../../helper";
import useOpen from "../../hooks/useOpen";

const AvailableCurrencyList = ({
  availableCurrencies,
  code: selectedCode,
  updateCurrency,
}) => {
  const { opened, onMenuOpen, onMenuClose } = useOpen();

  const displayedCurrencies = makeDisplayCurrencies(availableCurrencies);
  const options = displayedCurrencies.map(({ code, displayedStr }) => {
    const displayText =
      selectedCode === code && !opened
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
        onMenuOpen,
        onMenuClose,
        isSearchable: true,
        onChange: (e) => updateCurrency(e.value),
      }}
    />
  );
};

export default AvailableCurrencyList;
