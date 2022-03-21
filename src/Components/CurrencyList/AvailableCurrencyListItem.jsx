const AvailableCurrencyListItem = ({ code, displayedStr, onBlur }) => {
  return <option value={code}>{displayedStr}</option>;
};

export default AvailableCurrencyListItem;
