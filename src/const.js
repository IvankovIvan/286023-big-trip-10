export const TRIP_POINT_VIEW = 4;

export const TransferTypes = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`
];

export const ActivityTypes = [
  `Check-in`,
  `Sightseeing`,
  `Restaurant`
];

export const Cities = [
  `Amsterdam`,
  `Berlin`,
  `Geneva`,
  `Paris`,
  `London`,
  `Saint Petersburg`
];

export const DescriptionLine = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam,
  eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

export const EventOffers = [
  {
    id: `luggage`,
    type: `Flight`,
    name: `Add luggage`,
    price: 10
  },
  {
    id: `comfort`,
    type: `Flight`,
    name: `Switch to comfort class`,
    price: 150
  },
  {
    id: `meal`,
    type: `Flight`,
    name: `Add meal`,
    price: 2
  },
  {
    id: `seats`,
    type: `Flight`,
    name: `Choose seats`,
    price: 5
  },
  {
    id: `train`,
    type: `Train`,
    name: `Travel by train`,
    price: 40
  },
  {
    id: `uber`,
    type: `Taxi`,
    name: `Order Uber`,
    price: 20
  },
  {
    id: `rent`,
    type: `Drive`,
    name: `Rent a car`,
    price: 200
  },
  {
    id: `breakfast`,
    type: `Check`,
    name: `Add breakfast`,
    price: 50
  }
];

export const MonthNames = [
  `Jan`,
  `Feb`,
  `Mar`,
  `Apr`,
  `May`,
  `Jun`,
  `Jul`,
  `Aug`,
  `Sep`,
  `Oct`,
  `Nov`,
  `Dec`,
];

export const Filters = [`Everything`, `Future`, `Past`];

export const Menu = [`Table`, `Stats`];

export const SortType = {
  EVENT: `event`,
  PRICE: `price`,
  TIME: `time`
};
