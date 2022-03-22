import Select from "react-select";
import { makeDisplayCurrencies, findCurrencyObj } from "../../../helper";

const AvailableCurrencyList = ({
  availableCurrencies,
  code,
  updateCurrency,
}) => {
  const displayedCurrencies = makeDisplayCurrencies(availableCurrencies);
  const options = displayedCurrencies.map(({ code, displayedStr }) => {
    return { value: code, label: displayedStr };
  });

  const value = findCurrencyObj(options, code);

  return (
    <Select
      {...{
        value,
        options,
        isSearchable: true,
        onChange: (e) => updateCurrency(e.value),
      }}
    />
  );
};

export default AvailableCurrencyList;
