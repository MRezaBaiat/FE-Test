import { useSelector } from 'react-redux';
import { CurrencyType } from '../models';

function useRates (type: CurrencyType): number {
  const rates = useSelector((s: any) => s.currenciesReducer);
  return rates[type];
}

export default useRates;
