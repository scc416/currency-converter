const DeleteCurrencyButton = ({ deleteCurrency }) => {
  return (
    <div className="DeleteCurrencyButton" onClick={deleteCurrency}>
      ✕
    </div>
  );
};

export default DeleteCurrencyButton;
