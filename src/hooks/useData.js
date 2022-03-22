import axios from "axios";
import { useReducer, useEffect } from "react";
import { makeAvailableCurrencyLst, updateWithNewValue } from "../helper";
import {
  INIT_SETUP,
  RECEIVE_NEW_CURRENCY,
  RECEIVE_NEW_VALUE,
  RECEIVE_NEW_RATE,
  availableCurrenciesURL,
  latestRatesURL,
  initState,
} from "../constants";

const useData = () => {
  const reducers = {
    [INIT_SETUP](state, { currencies, rates }) {
      const { newCurrencies } = updateWithNewValue({ ...state, rates }, 0, 1);
      const newAvailableCurrencies = makeAvailableCurrencyLst(currencies);
      return {
        ...state,
        rates,
        currencies: newCurrencies,
        availableCurrencies: newAvailableCurrencies,
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
      const { newCurrencies, newValueInHKD } = updateWithNewValue(
        state,
        index,
        value
      );
      return { ...state, currencies: newCurrencies, valueInHKD: newValueInHKD };
    },
    [RECEIVE_NEW_RATE](state, { index, rates, value }) {
      const { currencies } = state;
      const newCurrencies = [...currencies];
      for (const index in newCurrencies) {
        const newValue = { ...newCurrencies[index] };
        const { code } = newValue;
        const exchangeRate = rates[code];
        newValue.value = value * exchangeRate;
        newCurrencies[index] = newValue;
      }
      return {
        ...state,
        currenctIndex: index,
        rates,
        currencies: newCurrencies,
      };
    },
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const { availableCurrencies, currencies, currenctIndex, rates } = state;

  useEffect(async () => {
    try {
      const { data: currencies } = await axios.get(availableCurrenciesURL);
      const {
        data: { hkd: rates },
      } = await axios.get(latestRatesURL);
      dispatch({ type: INIT_SETUP, currencies, rates });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const updateSelectedCurrencies = (index, code) => {
    dispatch({ type: RECEIVE_NEW_CURRENCY, index, code });
  };

  const updateValue = (index, value) => {
    dispatch({ type: RECEIVE_NEW_VALUE, index, value });
  };

  return {
    availableCurrencies,
    currencies,
    updateSelectedCurrencies,
    updateValue,
  };
};

export default useData;
