import InfoComponent from './components/info.js';
import PriceComponent from './components/price.js';
import MenuComponent from './components/menu.js';
import FilterComponent from './components/filter.js';
import SortComponent from './components/sort.js';
import EditComponent from './components/edit.js';
import ItemsComponent from "./components/items";
import ItemDayComponent from './components/itemDay.js';
import ItemComponent from './components/item.js';
import {generateTrips} from './mock/trips.js';
import {Menu, Filters, TRIP_POINT_VIEW} from './const.js';
import {sortDateArray} from './utilsDate.js';
import {renderElement, RenderPosition} from './utils.js';

const renderTrip = (element, trip) => {
  const tripComponent = new ItemComponent(trip).getElement();
  const editComponent = new EditComponent(trip).getElement();

  const editButton = tripComponent.querySelector(`.event__rollup-btn`);
  editButton.addEventListener(`click`, () => {
    element.replaceChild(editComponent, tripComponent);
  });

  editComponent.addEventListener(`submit`, (event) => {
    event.preventDefault();
    element.replaceChild(tripComponent, editComponent);
  });
  renderElement(element, tripComponent);
};


const createTripList = (trips, element) => {
  const tripList = trips.slice(0, TRIP_POINT_VIEW);
  const dateArray = Array
    .from(new Set(tripList.map((trip) => Date.parse(trip.schedule.date))));
  dateArray.forEach((date) => {
    const tripListFromDate = tripList.filter((item) => {
      return Date.parse(item.schedule.date) === date;
    });
    const itemDayComponent = new ItemDayComponent(tripListFromDate)
      .getElement();
    renderElement(element, itemDayComponent);
    const tripEventsList = itemDayComponent
      .querySelector(`.trip-events__list`);
    tripListFromDate.forEach((trip) => renderTrip(tripEventsList, trip));
  });
};

const tripArray = generateTrips().sort(sortDateArray);

const siteMainElement = document.querySelector(`.page-body`);
const siteInfoElement = siteMainElement.querySelector(`.trip-main__trip-info`);

renderElement(siteInfoElement, new InfoComponent(tripArray).getElement(),
    RenderPosition.AFTERBEGIN);
renderElement(siteInfoElement, new PriceComponent(tripArray).getElement());

const siteControlElement = siteMainElement
  .querySelector(`.trip-main__trip-controls`);
renderElement(siteControlElement.firstElementChild,
    new MenuComponent(Menu).getElement(),
    RenderPosition.AFTERNODE);
renderElement(siteControlElement, new FilterComponent(Filters).getElement());

const siteEventsElement = siteMainElement.querySelector(`.trip-events`);
renderElement(siteEventsElement, new SortComponent().getElement());
renderElement(siteEventsElement, new ItemsComponent().getElement());
createTripList(tripArray, siteEventsElement.lastElementChild);
