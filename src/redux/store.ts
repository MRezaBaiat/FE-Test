import { configureStore } from '@reduxjs/toolkit';
import { walletReducer } from './reducer/wallet.reducer';
import { currenciesSaga } from './sagas/currencies.saga';
import createSagaMiddleware from 'redux-saga';
import { currenciesReducer } from './reducer/currencies.reducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    walletReducer,
    currenciesReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(currenciesSaga);

export default store;
