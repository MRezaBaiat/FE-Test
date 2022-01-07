import { takeLatest, call, put } from 'redux-saga/effects';
import BalancesApi from '../../api/balances.api';
import { actionSetCurrencyRates, LOAD_RATES } from '../actions/currencies.actions';

function * fetchRatings () {
  try {
    const data = yield call(BalancesApi.fetchConversionRates);
    yield put(actionSetCurrencyRates(data.base, data.rates));
  } catch (e) {
    console.log('error', e);
  }
}

export function * currenciesSaga () {
  yield takeLatest(LOAD_RATES, fetchRatings);
}
