import { CurrencyType } from '../../models';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const actionExchange = createAction('currencies/exchange', (from: CurrencyType, to: CurrencyType, amount: number) => {
  return {

  };
});

export const actionConvertCurrency = (from: CurrencyType, to: CurrencyType, amount: number) => {
  return (dispatch, getState) => {
    return amount * 2;
  };
};
