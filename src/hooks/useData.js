import axios from "axios";
import { useReducer, useEffect } from "react";
import {
  makeAvailableCurrencyLst,
  updateWithNewValue,
  updateWithNewCode,
  addNewCurrency,
  removeCurrency,
} from "../helper";
import {
  INIT_SETUP,
  RECEIVE_NEW_CURRENCY,
  RECEIVE_NEW_VALUE,
  ADD_CURRENCY,
  REMOVE_CURRENCY,
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
      const newCurrencies = updateWithNewCode(state, index, code);
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
    [ADD_CURRENCY](state) {
      const newCurrencies = addNewCurrency(state);
      return { ...state, currencies: newCurrencies };
    },
    [REMOVE_CURRENCY](state, { index }) {
      const newCurrencies = removeCurrency(state, index);
      return { ...state, currencies: newCurrencies };
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

  const addCurrency = () => {
    dispatch({ type: ADD_CURRENCY });
  };

  const deleteCurrency = (index) => {
    dispatch({ type: REMOVE_CURRENCY, index });
  };

  return {
    availableCurrencies,
    currencies,
    updateSelectedCurrencies,
    updateValue,
    addCurrency,
    deleteCurrency,
  };
};

export default useData;
