import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  useEffect(async () => {
    try {
      const { data } = await axios.get(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
      );
      const properties = Object.values(data);
      setCurrencies(properties);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const lst = currencies.map((currency) => <li key={currency}>{currency}</li>);
  return (
    <>
      <h2>Currency Converter</h2>
      <ul>{lst}</ul>
    </>
  );
};

export default App;
