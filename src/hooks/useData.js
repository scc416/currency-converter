import axios from "axios";
import { useReducer, useEffect } from "react";
import { makeAvailableCurrencyLst } from "../helper";
import {
  RECEIVE_AVAILABLE_CURRENCIES,
  RECEIVE_NEW_CURRENCY,
  availableCurrenciesURL,
  initState,
} from "../constants";

const useData = () => {
  const reducers = {
    [RECEIVE_AVAILABLE_CURRENCIES](state, { currencies }) {
      return {
        ...state,
        availableCurrencies: makeAvailableCurrencyLst(currencies),
      };
    },
    [RECEIVE_NEW_CURRENCY](state, { number, code }) {
      const { currencies } = state;
      const newCurrencies = [...currencies];
      const newCurrency = { ...newCurrencies[number] };
      newCurrency.code = code;
      newCurrencies[number] = newCurrencies;
      return { ...state, currencies: newCurrencies };
    },
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  };

  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(async () => {
    try {
      const { data } = await axios.get(availableCurrenciesURL);
      dispatch({ type: RECEIVE_AVAILABLE_CURRENCIES, currencies: data });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const updateSelectedCurrencies = (number, code) => {
    dispatch({ type: RECEIVE_NEW_CURRENCY, number, code });
  };

  const { availableCurrencies, currencies } = state;

  return { availableCurrencies, currencies, updateSelectedCurrencies };
};

export default useData;
