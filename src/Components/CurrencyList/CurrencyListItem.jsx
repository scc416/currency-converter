import DeleteCurrencyButton from "./DeleteCurrencyButton";

const CurrencyListItem = () => {
  return (
    <div className="CurrencyListItem">
      <select value="grapefruit" >
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <input />
      <DeleteCurrencyButton />
    </div>
  );
};

export default CurrencyListItem;
