import "./App.css";
import useData from "./hooks/useData";

const App = () => {
  const currencies = useData();
  return (
    <>
      <div>Currency Converter</div>
    </>
  );
};

export default App;
