import { currenciesEmoji } from "./constants";

const findCurrency = (lst, code) => {
  const exist = code in lst;
  if (!exist) return;
  return true;
};

export const makeAvailableCurrencyLst = (lst) => {
  const availableCurrencyLst = [];
  for (const currency of currenciesEmoji) {
  }
  return availableCurrencyLst;
};
