import DeleteCurrencyButton from "./DeleteCurrencyButton";

const ValueInput = ({ value, updateValue }) => {
  return (
    <div className="ValueInput">
      <input
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        type="number"
      />
      <DeleteCurrencyButton />
    </div>
  );
};

export default ValueInput;
