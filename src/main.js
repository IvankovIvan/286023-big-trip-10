import InfoComponent from './components/info.js';
import PriceComponent from './components/price.js';
import MenuComponent from './components/menu.js';
import FilterComponent from './components/filter.js';
import SortComponent from './components/sort.js';
import EditComponent from './components/edit.js';
// import {createItemsTemplate} from './components/items.js';
import ItemsComponent from "./components/items";
// import {createItemDayTemplate} from './components/itemDay.js';
import ItemDayComponent from './components/itemDay.js';

import {generateTrips} from './mock/trips.js';
import {Menu, Filters, TRIP_POINT_VIEW} from './const.js';
import {sortDateArray} from './utilsDate.js';
import {renderElement, RenderPosition} from './utils.js';

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
    // render(element, createItemDayTemplate(tripListFromDate));
    renderElement(element, new ItemDayComponent(tripListFromDate).getElement());
  });
};

const tripArray = generateTrips().sort(sortDateArray);

const siteMainElement = document.querySelector(`.page-body`);
const siteInfoElement = siteMainElement.querySelector(`.trip-main__trip-info`);

// render(siteInfoElement, createInfoTemplate(tripArray), `afterbegin`);
renderElement(siteInfoElement, new InfoComponent(tripArray).getElement(),
    RenderPosition.AFTERBEGIN);
// render(siteInfoElement, createPriceTemplate(tripArray));
renderElement(siteInfoElement, new PriceComponent(tripArray).getElement());

const siteControlElement = siteMainElement
  .querySelector(`.trip-main__trip-controls`);
renderElement(siteControlElement.firstElementChild, new MenuComponent(Menu).getElement(),
    RenderPosition.AFTERNODE);
// render(siteControlElement.firstElementChild, createMenuTemplate(Menu),
//     `afterend`);
// render(siteControlElement, createFilterTemplate(Filters));
renderElement(siteControlElement, new FilterComponent(Filters).getElement());

const siteEventsElement = siteMainElement.querySelector(`.trip-events`);
// render(siteEventsElement, createSortTemplate());
renderElement(siteEventsElement, new SortComponent().getElement());
// render(siteEventsElement, createEditTemplate(tripArray[0]));
renderElement(siteEventsElement, new EditComponent(tripArray[0]).getElement());
// render(siteEventsElement, createItemsTemplate());
renderElement(siteEventsElement, new ItemsComponent().getElement());
createTripList(tripArray, siteEventsElement.lastElementChild);
