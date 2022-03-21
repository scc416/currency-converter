import axios from "axios";
import { useReducer, useEffect } from "react";
import { makeAvailableCurrencyLst, makeDisplayCurrencies } from "../helper";
import { RECEIVE_AVAILABLE_CURRENCIES } from "../constants";

const useData = () => {
  const reducers = {
    [RECEIVE_AVAILABLE_CURRENCIES](state, { currencies }) {
      return {
        ...state,
        availableCurrencies: makeAvailableCurrencyLst(currencies),
      };
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
      dispatch({ type: RECEIVE_AVAILABLE_CURRENCIES, currencies: data });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const { availableCurrencies } = state;

  return { availableCurrencies };
};

export default useData;
