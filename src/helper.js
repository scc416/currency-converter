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
    const displayedStr = `${emoji} ${code.toUpperCase()} - ${name}`;
    const newEntry = { code, displayedStr };
    displayedLst.push(newEntry);
  }
  return displayedLst;
};

export const findCurrencyObj = (options, code) => {
  for (const currency of options) {
    const { value } = currency;
    const found = value === code;
    if (found) return currency;
  }
};

export const getLatestRateURL = (code) => {
  return `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${code}.json`;
};
