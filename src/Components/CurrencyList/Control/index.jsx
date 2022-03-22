import AddCurrencyButtom from "./AddCurrencyButton";
import ErrorMessage from "./ErrorMessage";

const Control = ({ addCurrency, error }) => {
  return (
    <div className="Control">
      <AddCurrencyButtom addCurrency={addCurrency} />
      <ErrorMessage error={error} />
    </div>
  );
};

export default Control;
