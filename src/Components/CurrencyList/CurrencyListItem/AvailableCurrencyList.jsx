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

  const styles = {
    container: (base) => ({
      ...base,
      minWidth: "10em",
    }),
    menu: (base) => ({
      ...base,
      minWidth: "20em",
    }),
  };

  return (
    <Select
      {...{
        value,
        options,
        isSearchable: true,
        menuPlacement: "auto",
        onChange: (e) => updateCurrency(e.value),
        styles,
      }}
    />
  );
};

export default AvailableCurrencyList;
