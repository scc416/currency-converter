import "./Currency.css";
import CurrencyListItem from "./CurrencyListItem";
import AddCurrencyBottom from "./AddCurrencyButton";

const lst = [1, 2];

const CurrencyList = () => {
  const elms = lst.map((elm) => <CurrencyListItem />);
  return (
    <div className="CurrencyList">
      {elms} <AddCurrencyBottom />
    </div>
  );
};

export default CurrencyList;
