import AvailableCurrencyListItem from "./AvailableCurrencyListItem";

const AvailableCurrencyList = ({ availableCurrencies }) => {
  const elms = availableCurrencies.map((currency) => (
    <AvailableCurrencyListItem value={currency} />
  ));
  
  return <select value="grapefruit">{elms}</select>;
};

export default AvailableCurrencyList;
