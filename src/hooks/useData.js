import axios from "axios";
import { useReducer, useEffect } from "react";
import { makeAvailableCurrencyLst, getLatestRateURL } from "../helper";
import {
  RECEIVE_AVAILABLE_CURRENCIES,
  RECEIVE_NEW_CURRENCY,
  RECEIVE_NEW_VALUE,
  RECEIVE_NEW_RATE,
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
    [RECEIVE_NEW_CURRENCY](state, { index, code }) {
      const { currencies } = state;
      const newCurrencies = [...currencies];
      const newCurrency = { ...newCurrencies[index] };
      newCurrency.code = code;
      newCurrencies[index] = newCurrencies;
      return { ...state, currencies: newCurrencies };
    },
    [RECEIVE_NEW_VALUE](state, { index, value }) {
      const { currencies } = state;
      const newCurrencies = [...currencies];
      const newValue = { ...newCurrencies[index] };
      newValue.value = value;
      newCurrencies[index] = newValue;
      return { ...state, currencies: newCurrencies };
    },
    [RECEIVE_NEW_RATE](state, { index, rate, value }) {
      const { currencies } = state;
      const newCurrencies = [...currencies];
      for (const index in newCurrencies) {
        const newValue = { ...newCurrencies[index] };
        const { code } = newValue;
        const exchangeRate = rate[code];
        newValue.value = value * exchangeRate;
        newCurrencies[index] = newValue;
      }
      return {
        ...state,
        currenctIndex: index,
        rate,
        currencies: newCurrencies,
      };
    },
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const { availableCurrencies, currencies, currenctIndex } = state;

  const newIndex = async (index, value) => {
    try {
      const code = currencies[index].code;
      const url = getLatestRateURL(code);
      const {
        data: { [code]: rate },
      } = await axios.get(url);

      dispatch({ type: RECEIVE_NEW_RATE, index, rate, value });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(async () => {
    try {
      const { data } = await axios.get(availableCurrenciesURL);
      dispatch({ type: RECEIVE_AVAILABLE_CURRENCIES, currencies: data });

      newIndex(currenctIndex, currencies[currenctIndex].value);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const updateSelectedCurrencies = (index, code) => {
    dispatch({ type: RECEIVE_NEW_CURRENCY, index, code });
  };

  const updateValue = (index, value) => {
    dispatch({ type: RECEIVE_NEW_VALUE, index, value });
    newIndex(index, value);
  };

  return {
    availableCurrencies,
    currencies,
    updateSelectedCurrencies,
    updateValue,
  };
};

export default useData;
