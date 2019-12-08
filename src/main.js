import {createInfoTemplate} from './components/info.js';
import {createPriceTemplate} from './components/price.js';
import {createMenuTemplate} from './components/menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createSortTemplate} from './components/sort.js';
import {createEditTemplate} from './components/edit.js';
import {createItemsTemplate} from './components/items.js';
import {createItemDayTemplate} from './components/itemDay.js';
import {generateTrips} from './mock/trip.js';
import {Menu, Filters, TRIP_POINT_VIEW} from './const.js';
import {tripsInfo} from './utilsTrip.js';
import {sortDateArray} from './utilsDate.js';

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const createTripList = (trips, element) => {
  const tripList = trips.slice(1, TRIP_POINT_VIEW);
  const dateArray = Array
    .from(new Set(tripList.map((trip) => Date.parse(trip.schedule.date))));
  dateArray.forEach((date) => {
    const tripListFromDate = tripList.filter((item) => {
      return Date.parse(item.schedule.date) === date;
    });
    render(element, createItemDayTemplate(tripListFromDate));
  });
};

const tripArray = generateTrips().sort(sortDateArray);

const siteMainElement = document.querySelector(`.page-body`);
const siteInfoElement = siteMainElement.querySelector(`.trip-main__trip-info`);

const tripInfo = tripsInfo(tripArray);
render(siteInfoElement, createInfoTemplate(tripInfo), `afterbegin`);
render(siteInfoElement, createPriceTemplate(tripInfo));

const siteControlElement = siteMainElement
  .querySelector(`.trip-main__trip-controls`);

render(siteControlElement.firstElementChild, createMenuTemplate(Menu),
    `afterend`);
render(siteControlElement, createFilterTemplate(Filters));

const siteEventsElement = siteMainElement.querySelector(`.trip-events`);
render(siteEventsElement, createSortTemplate());
render(siteEventsElement, createEditTemplate(tripArray[0]));
render(siteEventsElement, createItemsTemplate());

createTripList(tripArray, siteEventsElement.lastElementChild);
