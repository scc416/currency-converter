import "./App.css";
import useData from "./hooks/useData";

const App = () => {
  const currencies = useData();
  const lst = currencies.map((currency) => <li key={currency}>{currency}</li>);
  return (
    <>
      <h2>Currency Converter</h2>
      <ul>{lst}</ul>
    </>
  );
};

export default App;
