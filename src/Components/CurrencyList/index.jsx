import "./Currency.css";
import CurrencyListItem from "./CurrencyListItem";
import AddCurrencyButtom from "./AddCurrencyButton";
import useData from "../../hooks/useData";

const CurrencyList = () => {
  const { availableCurrencies, currencies } = useData();

  const elms = currencies.map(({ code, val }, index) => (
    <CurrencyListItem {...{ key: index, availableCurrencies, code, val }} />
  ));

  return (
    <div className="CurrencyList">
      {elms} <AddCurrencyButtom />
    </div>
  );
};

export default CurrencyList;
