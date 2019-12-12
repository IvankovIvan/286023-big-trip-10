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

export const createPriceTemplate = (tripArray) => {
  return (
    `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value"
      >${getTotalPrice(tripArray)}</span>
    </p>`
  );
};

