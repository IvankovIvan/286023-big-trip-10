import {TransferTypes, ActivityTypes,
  Cities, DescriptionLine, EventOffers} from '../const.js';
import {getRandomIntegerNumber} from '../utils.js';
import {PHOTO_COUNT_MAX, PRICE_MAX, DESCRIPTION_MAX_LINE} from './const.js';

const generateValueFromArray = (array) => {
  return array[getRandomIntegerNumber(array.length - 1)];
};

const generateArrayEmpty = (count) => {
  return new Array(count)
    .fill(``);
};

const generateArray = (count) => {
  return generateArrayEmpty(count)
    .map(getRandomIntegerNumber);
};

const generateRandomLengthArrayEmpty = (maxLength, minLength = 0) => {
  return generateArrayEmpty(getRandomIntegerNumber(maxLength, minLength));
};

const getTypeToLine = (type) => {
  return `${type} ${ActivityTypes.includes(type) ? `at` : `to`}`;
};
const generateDescription = (countLines) => {
  let arr = generateRandomLengthArrayEmpty(countLines, 1);
  const lines = new Set(arr.map(() => {
    return getRandomIntegerNumber(DescriptionLine.length - 1);
  }));
  let descriptionArray = new Array(lines.length);
  lines.forEach((number) => descriptionArray.push(DescriptionLine[number]));
  return descriptionArray.join(` `);
};

const generateOffers = (type) => {
  const arr1 = EventOffers.filter((value) => value.type === type);
  if (arr1.length === 0) {
    return [];
  }
  let arr = generateRandomLengthArrayEmpty(2);
  if (arr.length === 0) {
    return [];
  }

  const lines = new Set(arr.map(() => {
    return getRandomIntegerNumber(arr1.length - 1);
  }));
  let descriptionArray = [];
  lines.forEach((number) => descriptionArray.push(arr1[number]));
  return descriptionArray;
};

const generateHour = (minHour, maxHour) => {
  return getRandomIntegerNumber(maxHour, minHour);
};

const getDuration = (dateStart, dateEnd) => {
  let hour = dateEnd.getHours() - dateStart.getHours();
  let minute = dateEnd.getMinutes() - dateStart.getMinutes();
  if (minute < 0) {
    hour--;
    minute = 60 + minute;
  }
  const date = new Date();
  date.setHours(hour, minute);
  return date;
};

const generateTripEvent = (date) => {
  const type = generateValueFromArray(TransferTypes.concat(ActivityTypes));
  const typeToLine = getTypeToLine(type);
  // console.log(date);
  const dateCurrent = new Date(date);
  const timeStart = new Date(date);
  // console.log(date, timeStart);
  const timeStartHour = generateHour(0, 22);
  timeStart.setHours(timeStartHour, generateHour(0, 59));

  const timeEnd = new Date(date);
  timeEnd.setHours(generateHour(timeStartHour + 1, 23), generateHour(0, 59));
  const duration = getDuration(timeStart, timeEnd);

  return {
    type,
    typeToLine,
    city: generateValueFromArray(Cities),
    photos: new Set(generateArray(PHOTO_COUNT_MAX, 0)),
    schedule: {
      date: dateCurrent,
      timeStart,
      timeEnd,
      duration
    },
    price: getRandomIntegerNumber(PRICE_MAX),
    offers: generateOffers(type),
    description: generateDescription(DESCRIPTION_MAX_LINE)
  };
};

export {generateTripEvent};
