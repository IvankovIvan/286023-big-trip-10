const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const getTimeFormat = (dateTime) => {
  return castTimeFormat(dateTime.getHours()) + `:` +
    castTimeFormat(dateTime.getMinutes());
};

export const getTimeFormatString = (dateTime) => {
  const hour = dateTime.getHours();
  const minute = dateTime.getMinutes();
  let date = hour === 0 ? `` : hour + `H `;
  date += minute === 0 ? `` : minute + `M`;
  return date;
};

export const getDateFormatUS = (dateTime) => {
  return dateTime.getFullYear() + `-` + castTimeFormat(dateTime.getMonth()) +
    `-` + castTimeFormat(dateTime.getDate());
};

export const getDateFormatISO = (dateTime) => {
  return getDateFormatUS(dateTime) + `T` + getTimeFormat(dateTime);
};

export const getDateFormatSmallDateTime = (dateTime, separation = `/`) => {
  return (`${castTimeFormat(dateTime.getDate())}${separation}${
    castTimeFormat(dateTime.getMonth())}${separation}${
    dateTime.getFullYear().toString().slice(-2)} ${
    castTimeFormat(dateTime.getHours())}:${
    castTimeFormat(dateTime.getMinutes())}`);
};

export const sortDateArray = (val1, val2) => {
  return new Date(val1.schedule.timeStart) - new Date(val2.schedule.timeStart);
};


