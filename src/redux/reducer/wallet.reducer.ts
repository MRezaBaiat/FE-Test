import { createReducer } from '@reduxjs/toolkit';
import { actionSetWallet } from '../actions/wallet.actions';
import { CurrencyType } from '../../models';

export const walletReducer = createReducer({
  [CurrencyType.USD]: 200,
  [CurrencyType.EUR]: 150,
  [CurrencyType.GBP]: 10
}, (builder) => {
  builder.addCase(actionSetWallet, (state, action) => action.payload);
});
