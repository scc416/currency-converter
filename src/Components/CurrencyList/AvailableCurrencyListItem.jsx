const AvailableCurrencyListItem = ({ code, displayedStr }) => {
  return <option value={code}>{displayedStr}</option>;
};

export default AvailableCurrencyListItem;
