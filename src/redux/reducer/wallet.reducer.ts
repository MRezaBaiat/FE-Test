import { createReducer } from '@reduxjs/toolkit';
import { actionExchange } from '../actions/currencies.actions';
import { CurrencyType } from '../../models';

export const balanceReducer = createReducer({
  [CurrencyType.USD]: 200,
  [CurrencyType.EUR]: 150,
  [CurrencyType.GBP]: 10
}, (builder) => {
  builder.addCase(actionExchange, (state, action) => action.payload);
});
