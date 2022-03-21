import { currenciesEmoji } from "./constants";

const findCurrency = (lst, code) => {
  const exist = code in lst;
  if (!exist) return;
  return lst[code];
};

export const makeAvailableCurrencyLst = (lst) => {
  const availableCurrencyLst = [];
  for (const currency of currenciesEmoji) {
    const { code } = currency;
    const name = findCurrency(lst, code);
    if (name) {
      const newCurrencies = { ...currency, name };
      availableCurrencyLst.push(newCurrencies);
    }
  }
  return availableCurrencyLst;
};

export const makeDisplayCurrencies = (lst) => {
  const displayedLst = [];
  for (const { name, emoji, code } of lst) {
    const displayedStr = `${emoji}${code.toUpperCase()} - ${name}`;
    displayedLst.push(displayedStr);
  }
  return displayedLst;
};
