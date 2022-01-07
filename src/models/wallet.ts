import { CurrencyType } from './index';

export default class Wallet {
    private readonly balances: {[key in CurrencyType]: number} = {
      [CurrencyType.USD]: 200,
      [CurrencyType.EUR]: 150,
      [CurrencyType.GBP]: 10
    };

    public getBalance (type: CurrencyType) {
      return this[type];
    }

    public exchange (from: CurrencyType, to: CurrencyType, amount: number) {

    }

    public convert (from: CurrencyType, to: CurrencyType, amount: number) {

    }
}
