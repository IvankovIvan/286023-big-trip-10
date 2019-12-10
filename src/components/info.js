import {tripsInfo} from '../utilsTrip';

export const createInfoTemplate = (tripArray) => {
  const tripInfo = tripsInfo(tripArray);
  return (
    `<div class="trip-info__main">
      <h1 class="trip-info__title"
      >${tripInfo.tripCityFrom} &mdash; ... &mdash; ${tripInfo.tripCityTo}</h1>

      <p class="trip-info__dates">${tripInfo.periodDateToString}</p>
    </div>`
  );
};
