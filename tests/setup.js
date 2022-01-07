import 'react-native-gesture-handler/jestSetup';
import BalancesApi from '../src/api/balances.api';
import { CurrencyType } from '../src/models';

window.location = {
  assign: jest.fn()
};
jest.mock('React', () => ({
  ...jest.requireActual('React'),
  memo: (c) => c
}));

global.fetch = jest.fn();

BalancesApi.fetchConversionRates = jest.fn(async () => {
  return {
    rates: {
      [CurrencyType.EUR]: 5,
      [CurrencyType.GBP]: 10,
      [CurrencyType.USD]: 15
    },
    base: CurrencyType.EUR
  };
});

/* jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
}); */
