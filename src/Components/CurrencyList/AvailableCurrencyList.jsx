import AvailableCurrencyListItem from "./AvailableCurrencyListItem";

const AvailableCurrencyList = () => {
  return (
    <select value="grapefruit">
      <AvailableCurrencyListItem value="grapefruit" />
      <AvailableCurrencyListItem value="lime" />
      <AvailableCurrencyListItem value="coconut" />
      <AvailableCurrencyListItem value="mango" />
    </select>
  );
};

export default AvailableCurrencyList;
