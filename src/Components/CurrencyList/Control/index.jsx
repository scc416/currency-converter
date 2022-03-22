import AddCurrencyButtom from "./AddCurrencyButton";

const Control = ({ addCurrency }) => {
  return (
    <div>
      <AddCurrencyButtom addCurrency={addCurrency} />
      <div>Error</div>
    </div>
  );
};

export default Control;
