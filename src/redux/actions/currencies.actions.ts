import { createAction } from '@reduxjs/toolkit';
import { CurrencyType } from '../../models';
import { getRate } from '../../utils';

export const LOAD_RATES = 'rates/loading';

export const actionLoadRates = createAction(LOAD_RATES, () => {
  return {
    payload: undefined
  };
});

export const actionSetCurrencyRates = createAction('currencies/set-rates', (base: CurrencyType, rates: {[key in CurrencyType]: number}) => {
  return {
    payload: {
      ...rates,
      loaded: true,
      base
    }
  };
});

export const actionConvert = (from: CurrencyType, to: CurrencyType, amount: number) => {
  return (dispatch, getState) => {
    const base = getState().currenciesReducer.base;
    const rates = getState().currenciesReducer;
    const rate = getRate(from, to, base, rates);
    return amount * rate;
  };
};
