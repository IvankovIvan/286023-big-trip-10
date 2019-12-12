import {MonthNames} from './const.js';

const getPeriodDateToString = (dateFrom, dateTo) => {
  return `${MonthNames[dateFrom.getMonth()]} ${dateFrom.getDate()} -${
    dateFrom.getMonth() === dateTo.getMonth() ? `` :
      MonthNames[dateTo.getMonth()]} ${dateTo.getDate()}`;
};

export const tripsInfo = (tripArray) => {
  const tripsFirstPoint = tripArray[0];
  const tripsLastPoint = tripArray[tripArray.length - 1];
  const tripCityFrom = tripsFirstPoint.city;
  const tripCityTo = tripsLastPoint.city;
  const tripDateFrom = tripsFirstPoint.schedule.timeStart;
  const tripDateTo = tripsLastPoint.schedule.timeEnd;
  const periodDateToString = getPeriodDateToString(tripDateFrom, tripDateTo);
  return ({
    tripCityFrom,
    tripCityTo,
    tripDateFrom,
    tripDateTo,
    periodDateToString
  });
};
