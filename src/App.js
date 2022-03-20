import "./App.css";
import useData from "./hooks/useData";

const App = () => {
  const currencies = useData();
  return (
    <>
      <div>Currency converter</div>
    </>
  );
};

export default App;
