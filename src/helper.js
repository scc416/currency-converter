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

export const updateWithNewValue = (state, index, value) => {
  const { currencies, rates } = state;
  const newCurrencies = [...currencies];

  const updatedCurrency = { ...newCurrencies[index], value };
  const { code: updatedCode } = updatedCurrency;
  newCurrencies[index] = updatedCurrency;

  const updatedRate = rates[updatedCode];
  const newValueInHKD = value / updatedRate;

  for (const index in newCurrencies) {
    const currency = newCurrencies[index];
    const { code } = currency;
    const rate = rates[code];
    const newCurrency = { code, value: newValueInHKD * rate };
    newCurrencies[index] = newCurrency;
  }
  return { newCurrencies, newValueInHKD };
};
