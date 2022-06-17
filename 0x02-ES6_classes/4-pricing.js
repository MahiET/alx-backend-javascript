import Currency from './3-currency';

export default class pricing {
    constructor(amount, currency){
	this.amount = amount;
	this.currency = currency;
    }

    get amount(){
	return this._amount;
    }

    set amount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('amount must be a Number');
    }
    this._amount = amount;
  }

    get currency() {
	return this._currency;
    }

    set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError('currency must be a Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

    

    