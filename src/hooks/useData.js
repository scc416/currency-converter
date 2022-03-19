import axios from "axios";
import { useState, useEffect } from "react";

const useData = () => {
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
  return currencies;
};

export default useData;
