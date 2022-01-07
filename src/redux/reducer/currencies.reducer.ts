import { createReducer } from '@reduxjs/toolkit';
import { CurrencyType } from '../../models';
import { actionSetCurrencyRates } from '../actions/currencies.actions';

export const currenciesReducer = createReducer({
  loaded: false,
  base: undefined,
  [CurrencyType.USD]: 0,
  [CurrencyType.EUR]: 0,
  [CurrencyType.GBP]: 0
}, (builder) => {
  builder.addCase(actionSetCurrencyRates, (state, action) => action.payload);
});
