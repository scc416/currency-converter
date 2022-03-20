import CurrencyListItem from "./CurrencyListItem";

const lst = [1, 2];

const CurrencyList = () => {
  const elms = lst.map((elm) => <CurrencyListItem />);
  return <div>{elms}</div>;
};

export default CurrencyList;