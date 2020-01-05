import InfoComponent from './components/info.js';
import PriceComponent from './components/price.js';
import MenuComponent from './components/menu.js';
import FilterComponent from './components/filter.js';
import SortComponent from './components/sort.js';
import EditComponent from './components/edit.js';
import ItemsComponent from "./components/items";
import ItemDayComponent from './components/itemDay.js';
import ItemComponent from './components/item.js';
import NoItemComponent from './components/noItem.js';
import {generateTrips} from './mock/trips.js';
import {Menu, Filters, TRIP_POINT_VIEW} from './const.js';
import {sortDateArray} from './utilsDate.js';
import {render, RenderPosition, replace} from "./utils/render";

const renderTrip = (element, trip) => {
  const tripComponent = new ItemComponent(trip);
  const editComponent = new EditComponent(trip);

  const replaceEditTask = () => {
    replace(tripComponent, editComponent);
  };

  const onEscKeydown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;
    if (isEscKey) {
      replaceEditTask();
      document.removeEventListener(`keydown`, onEscKeydown);
    }
  };

  const replaceTaskEdit = () => {
    replace(editComponent, tripComponent);
    document.addEventListener(`keydown`, onEscKeydown);
  };

  tripComponent.setEditButtonClickHandler(replaceTaskEdit);

  editComponent.setSubmitHandler(replaceEditTask);
  render(element, tripComponent);
};

const createTripList = (trips, element) => {
  const tripList = trips.slice(0, TRIP_POINT_VIEW);
  const dateArray = Array
    .from(new Set(tripList.map((trip) => Date.parse(trip.schedule.date))));
  dateArray.forEach((date) => {
    const tripListFromDate = tripList.filter((item) => {
      return Date.parse(item.schedule.date) === date;
    });
    const itemDayComponent = new ItemDayComponent(tripListFromDate);
    render(element, itemDayComponent);
    const tripEventsList = itemDayComponent.getElement()
      .querySelector(`.trip-events__list`);
    tripListFromDate.forEach((trip) => renderTrip(tripEventsList, trip));
  });
};

const tripArray = generateTrips().sort(sortDateArray);
const isTrips = tripArray.length;

const siteMainElement = document.querySelector(`.page-body`);
const siteInfoElement = siteMainElement.querySelector(`.trip-main__trip-info`);

render(siteInfoElement, new PriceComponent(tripArray));

const siteControlElement = siteMainElement
  .querySelector(`.trip-main__trip-controls`);

render(siteControlElement.firstElementChild, new MenuComponent(Menu),
    RenderPosition.AFTERNODE);
render(siteControlElement, new FilterComponent(Filters));

const siteEventsElement = siteMainElement.querySelector(`.trip-events`);
if (isTrips === 0) {
  render(siteEventsElement, new NoItemComponent());
} else {
  render(siteInfoElement, new InfoComponent(tripArray),
      RenderPosition.AFTERBEGIN);
  render(siteEventsElement, new SortComponent());
  render(siteEventsElement, new ItemsComponent());
  createTripList(tripArray, siteEventsElement.lastElementChild);
}
