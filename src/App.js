import "./App.css";
import useData from "./hooks/useData";
import Title from "./Components/Title";
import CurrencyList from "./Components/CurrencyList";

const App = () => {
  const currencies = useData();
  return (
    <>
      <Title />
      <CurrencyList />
    </>
  );
};

export default App;
