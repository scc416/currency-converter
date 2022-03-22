import DeleteCurrencyButton from "./CurrencyListItem/DeleteCurrencyButton";

const ValueInput = ({ value, updateValue, deleteCurrency }) => {
  return (
    <div className="ValueInput">
      <input
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        type="number"
      />
      <DeleteCurrencyButton deleteCurrency={deleteCurrency} />
    </div>
  );
};

export default ValueInput;
