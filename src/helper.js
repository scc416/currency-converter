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

const getRate = (state, index) => {
  const { currencies, rates } = state;
  const { code } = currencies[index];
  return rates[code];
};

const getCode = (state, index) => {
  const { currencies } = state;
  const { code } = currencies[index];
  return code;
};

const getInfo = (state, index, newRate, value) => {
  const rate = getRate(state, index);
  const code = getCode(state, index);
  return { value: (rate / newRate) * value, code };
};

export const updateWithNewValue = (state, index, value) => {
  const { currencies } = state;
  const newCurrencies = [...currencies];
  const newRate = getRate(state, index);
  for (const index in newCurrencies) {
    const newObj = getInfo(state, index, newRate, value);
    newCurrencies[index] = newObj;
  }
  return newCurrencies;
};

export const updateWithNewCode = (state, index, code) => {
  const { currencies, rates } = state;
  const newCurrencies = [...currencies];

  const rate = rates[code];
  const updatedCurrency = { code, value: rate };
  newCurrencies[index] = updatedCurrency;

  return newCurrencies;
};

export const addNewCurrency = (state) => {
  const { currencies, valueInHKD } = state;
  const newCurrency = { code: "hkd", value: valueInHKD };
  const newCurrencies = currencies.concat([newCurrency]);
  return newCurrencies;
};

export const removeCurrency = (state, index) => {
  const { currencies } = state;
  const firstHalf = currencies.slice(0, index);
  const secondHalf = currencies.slice(index + 1);
  const newCurrencies = firstHalf.concat(secondHalf);
  return newCurrencies;
};
