import { CurrencyType } from './index';

export interface ExchangeSession{
    fromType: CurrencyType,
    toType: CurrencyType,
    fromAmount: number,
    toAmount: number
}
