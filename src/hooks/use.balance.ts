import { useSelector } from 'react-redux';
import { CurrencyType } from '../models';

function useBalance (type: CurrencyType): number {
  const balances = useSelector((s: any) => s.walletReducer);
  return balances[type];
}

export default useBalance;
