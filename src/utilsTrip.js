import {MonthNames} from './const.js';

const getPeriodDateToString = (dateFrom, dateTo) => {
  return `${MonthNames[dateFrom.getMonth()]} ${dateFrom.getDate()} -${
    dateFrom.getMonth() === dateTo.getMonth() ? `` :
      MonthNames[dateTo.getMonth()]} ${dateTo.getDate()}`;
};

const getSummaTrip = (tripArray) => {
  let summa = 0;
  tripArray.forEach((point) => {
    summa += point.price;
    point.offers.forEach((offer) => {
      summa += offer.price;
    });
  });
  return summa;
};

export const tripsInfo = (tripArray) => {
  const tripsFirstPoint = tripArray[0];
  const tripsLastPoint = tripArray[tripArray.length - 1];
  const tripCityFrom = tripsFirstPoint.city;
  const tripCityTo = tripsLastPoint.city;
  const tripDateFrom = tripsFirstPoint.schedule.timeStart;
  const tripDateTo = tripsLastPoint.schedule.timeEnd;
  const periodDateToString = getPeriodDateToString(tripDateFrom, tripDateTo);
  const summaTrip = getSummaTrip(tripArray);
  return ({
    tripCityFrom,
    tripCityTo,
    tripDateFrom,
    tripDateTo,
    periodDateToString,
    summaTrip
  });
};
