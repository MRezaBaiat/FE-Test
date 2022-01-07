import { CurrencyType } from '../../models';
import { createAction } from '@reduxjs/toolkit';
import { actionConvert } from './currencies.actions';
import { ExchangeSession } from '../../models/exchange.session';

export const actionExchange = (session: ExchangeSession) => {
  return (dispatch, getState) => {
    const converted = dispatch(actionConvert(session.fromType, session.toType, session.fromAmount));
    const wallet = { ...getState().walletReducer };
    if (wallet[session.fromType] < session.fromAmount) {
      return;
    }
    wallet[session.fromType] -= session.fromAmount;
    wallet[session.toType] += converted;
    dispatch(actionSetWallet(wallet));
  };
};

export const actionSetWallet = createAction('wallet/set', (wallet: {[key in CurrencyType]: number}) => {
  return {
    payload: wallet
  };
});
