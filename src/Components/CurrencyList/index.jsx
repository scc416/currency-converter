import "./Currency.css";
import CurrencyListItem from "./CurrencyListItem";
import AddCurrencyBottom from "./AddCurrencyButton";
import useData from "../../hooks/useData";

const lst = [1, 2];

const CurrencyList = () => {
  const currencies = useData();
  const elms = lst.map((elm) => <CurrencyListItem />);
  return (
    <div className="CurrencyList">
      {elms} <AddCurrencyBottom />
    </div>
  );
};

export default CurrencyList;
