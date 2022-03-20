import axios from "axios";
import { useReducer, useEffect } from "react";

const RECEIVE_AVAILABLE_CURRENCIES = "RECEIVE_AVAILABLE_CURRENCIES";

const useData = () => {
  const reducers = {
    [RECEIVE_AVAILABLE_CURRENCIES](state, { availableCurrencies }) {
      return { ...state, availableCurrencies };
    },
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  };

  const [state, dispatch] = useReducer(reducer, { availableCurrencies: [] });

  useEffect(async () => {
    try {
      const { data } = await axios.get(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
      );
      const availableCurrencies = Object.values(data);
      dispatch({ type: RECEIVE_AVAILABLE_CURRENCIES, availableCurrencies });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const { availableCurrencies } = state;
  
  return { availableCurrencies };
};

export default useData;
