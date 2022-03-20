import CurrencyListItem from "./CurrencyListItem";
import "./Currency.css"
const lst = [1, 2];

const CurrencyList = () => {
  const elms = lst.map((elm) => <CurrencyListItem />);
  return <div className="CurrencyList">{elms}</div>;
};

export default CurrencyList;