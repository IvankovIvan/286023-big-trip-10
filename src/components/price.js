import AbstractComponent from "./abstract-component";

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

export default class Price extends AbstractComponent {
  constructor(tripArray) {
    super();
    this._totalPrice = getTotalPrice(tripArray);
  }

  getTemplate() {
    return createPriceTemplate(this._totalPrice);
  }
}

