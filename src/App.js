import "./App.css";
import useData from "./hooks/useData";
import Title from "./Components/Title";

const App = () => {
  const currencies = useData();
  return (
    <>
      <Title />{" "}
    </>
  );
};

export default App;
