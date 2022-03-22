import AddCurrencyButtom from "./AddCurrencyButton";
import ErrorMessage from "./ErrorMessage";

const Control = ({ addCurrency }) => {
  return (
    <div className="Control">
      <AddCurrencyButtom addCurrency={addCurrency} />
      <ErrorMessage error="ERROR" />
    </div>
  );
};

export default Control;
