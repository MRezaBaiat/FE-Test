import { cleanup } from '@testing-library/react-native';
import { getRate } from '../src/utils';
import { CurrencyType } from '../src/models';

afterEach(cleanup);

describe('unit.tests', () => {
  test('getRate() works correctly', () => {
    const rates = {
      [CurrencyType.EUR]: 1000,
      [CurrencyType.USD]: 500
    };
    const rate = getRate(CurrencyType.EUR, CurrencyType.USD, CurrencyType.EUR, rates);
    expect(rate).toStrictEqual(500);
  });
});
