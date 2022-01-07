import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionLoadRates } from '../redux/actions/currencies.actions';

function useLoader (): boolean {
  const dispatch = useDispatch();
  const loaded = useSelector((s: any) => s.currenciesReducer.loaded);
  useEffect(() => {
    dispatch(actionLoadRates());
  }, []);
  return loaded;
}

export default useLoader;
