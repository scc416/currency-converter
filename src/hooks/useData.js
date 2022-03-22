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
  REMOVE_ERROR,
  SET_ERROR,
  ERROR_TOO_MANY_CURRENCIES,
  ERROR_TOO_LESS_CURRENCIES,
  INIT_VALUE,
  INIT_INDEX,
  availableCurrenciesURL,
  latestRatesURL,
  initState,
} from "../constants";

const useData = () => {
  const reducers = {
    [INIT_SETUP](state, { currencies, rates }) {
      const { newCurrencies } = updateWithNewValue(
        { ...state, rates },
        INIT_INDEX,
        INIT_VALUE
      );
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
      const { newCurrencies, rate } = updateWithNewValue(state, index, value);
      return { ...state, currencies: newCurrencies, value, rate };
    },
    [ADD_CURRENCY](state) {
      const newCurrencies = addNewCurrency(state);
      return { ...state, currencies: newCurrencies };
    },
    [REMOVE_CURRENCY](state, { index }) {
      const newCurrencies = removeCurrency(state, index);
      return { ...state, currencies: newCurrencies };
    },
    [REMOVE_ERROR](state) {
      return { ...state, error: null };
    },
    [SET_ERROR](state, { error }) {
      return { ...state, error };
    },
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const { availableCurrencies, currencies, error } = state;

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

  useEffect(() => {
    if (error) {
      const removeError = setTimeout(
        () => dispatch({ type: REMOVE_ERROR }),
        2500
      );
      return () => clearTimeout(removeError);
    }
  }, [error]);

  const dispatcher = (action) => {
    dispatch({ type: REMOVE_ERROR });
    dispatch(action);
  };

  const updateSelectedCurrencies = (index, code) => {
    dispatcher({ type: RECEIVE_NEW_CURRENCY, index, code });
  };

  const updateValue = (index, value) => {
    dispatcher({ type: RECEIVE_NEW_VALUE, index, value });
  };

  const addCurrency = () => {
    const tooManyCurrencies = currencies.length >= 10;
    if (tooManyCurrencies) {
      return dispatch({ type: SET_ERROR, error: ERROR_TOO_MANY_CURRENCIES });
    }
    dispatcher({ type: ADD_CURRENCY });
  };

  const deleteCurrency = (index) => {
    const toLessCurrencies = currencies.length <= 2;
    if (toLessCurrencies) {
      return dispatch({ type: SET_ERROR, error: ERROR_TOO_LESS_CURRENCIES });
    }
    dispatcher({ type: REMOVE_CURRENCY, index });
  };

  return {
    availableCurrencies,
    currencies,
    updateSelectedCurrencies,
    updateValue,
    addCurrency,
    deleteCurrency,
    error,
  };
};

export default useData;
