export const createPriceTemplate = (tripInfo) => {
  return (
    `<p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value"
      >${tripInfo.summaTrip}</span>
    </p>`
  );
};

