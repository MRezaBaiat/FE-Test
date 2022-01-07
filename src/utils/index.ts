import { CurrencyType } from '../models';

export function getRate (from: CurrencyType, to: CurrencyType, base: CurrencyType, rates) {
  if (from === base) {
    return rates[to];
  }
  if (to === base) {
    return 1 / rates[from];
  }
  return rates[to] * (1 / rates[from]);
}

export function round (num) {
  let places: any = 4;
  num = parseFloat(num);
  places = (places ? parseInt(places, 10) : 0);
  if (places > 0) {
    const length = places;
    places = '1';
    for (let i = 0; i < length; i++) {
      places += '0';
      places = parseInt(places, 10);
    }
  } else {
    places = 1;
  }
  return Math.round((num + Number.EPSILON) * (1 * places)) / (1 * places);
}
