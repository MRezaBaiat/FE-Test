export default class BalancesApi {
  public static fetchConversionRates () {
    console.log(process.env.API_KEY);
    return fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.API_KEY}`)
      .then(res => res.json());
  }
}
