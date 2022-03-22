const Control = ({ addCurrency }) => {
  return (
    <div>
      <div className="AddCurrencyBottom" onClick={addCurrency}>
        + Add Currency
      </div>
      <div>Error</div>
    </div>
  );
};

export default Contorl;
