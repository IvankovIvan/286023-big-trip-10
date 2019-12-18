import {createElement} from '../utils.js';

const getTotalPrice = (tripArray) => {
  let sum = 0;
  tripArray.forEach((point) => {
    sum += point.price;
    point.offers.forEach((offer) => {
      sum += offer.price;
    });
  });
  return sum;
};

const createPriceTemplate = (totalPrice) => {
  return (
    `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value"
      >${totalPrice}</span>
    </p>`
  );
};

export default class Price {
  constructor(tripArray) {
    this._totalPrice = getTotalPrice(tripArray);
    this._element = null;
  }

  getTemplate() {
    return createPriceTemplate(this._totalPrice);
  }

  getElement() {
    this._element = createElement(this.getTemplate());

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

