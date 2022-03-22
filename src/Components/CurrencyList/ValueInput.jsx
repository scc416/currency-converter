import DeleteCurrencyButton from "./CurrencyListItem/DeleteCurrencyButton";

const ValueInput = ({ value, updateValue, deleteCurrency }) => {
  return (
    <div className="ValueInput">
      <input
        {...{
          value,
          type: "number",
          onChange: (e) => updateValue(e.target.value),
        }}
      />
      <DeleteCurrencyButton deleteCurrency={deleteCurrency} />
    </div>
  );
};

export default ValueInput;
