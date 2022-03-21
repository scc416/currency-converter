import DeleteCurrencyButton from "./DeleteCurrencyButton";

const ValueInput = ({ value }) => {
  return (
    <div className="ValueInput">
      <input value={value} />
      <DeleteCurrencyButton />
    </div>
  );
};

export default ValueInput;
