export const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const getTimeFormat = (dateTime) => {
  return castTimeFormat(dateTime.getHours()) + `:` +
    castTimeFormat(dateTime.getMinutes());
};

export const getDateFormatUS = (dateTime) => {
  return dateTime.getFullYear() + `-` + castTimeFormat(dateTime.getMonth()) +
    `-` + castTimeFormat(dateTime.getDate());
};

export const sortDateArray = (val1, val2) => {
  return new Date(val1.schedule.timeStart) - new Date(val2.schedule.timeStart);
};


