import {generateArrayEmpty, getRandomIntegerNumber} from '../utils.js';
import {generateTripEvent} from './trip-event.js';
import {DATE_START, DAY_EVENT_MIM, DAY_EVENT_MAX,
  TRIP_DAY_COUNT_MIN, TRIP_DAY_COUNT_MAX} from './const.js';

export const generateTrips = () => {
  const date = new Date(DATE_START);
  const tripArr = [];
  generateArrayEmpty(getRandomIntegerNumber(DAY_EVENT_MAX, DAY_EVENT_MIM))
    .forEach(() => {
      generateArrayEmpty(getRandomIntegerNumber(TRIP_DAY_COUNT_MAX,
          TRIP_DAY_COUNT_MIN))
        .forEach(() => {
          const trip = generateTripEvent(date);
          tripArr.push(trip);
        });
      date.setDate(date.getDate() + 1);
    });
  return tripArr;
};
