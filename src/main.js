import InfoComponent from './components/info.js';
import PriceComponent from './components/price.js';
import MenuComponent from './components/menu.js';
import FilterComponent from './components/filter.js';
import SortComponent from './components/sort.js';
import ItemsComponent from "./components/items";
import NoItemComponent from './components/noItem.js';
import {generateTrips} from './mock/trips.js';
import {Menu, Filters} from './const.js';
import {sortDateArray} from './utilsDate.js';
import {render, RenderPosition} from "./utils/render";
import TripController from "./controllers/trip";

const tripArray = generateTrips().sort(sortDateArray);

const siteMainElement = document.querySelector(`.page-body`);
const siteInfoElement = siteMainElement.querySelector(`.trip-main__trip-info`);

render(siteInfoElement, new PriceComponent(tripArray));

const siteControlElement = siteMainElement
  .querySelector(`.trip-main__trip-controls`);

render(siteControlElement.firstElementChild, new MenuComponent(Menu),
    RenderPosition.AFTERNODE);
render(siteControlElement, new FilterComponent(Filters));

const isTrips = tripArray.length;
const siteEventsElement = siteMainElement.querySelector(`.trip-events`);
if (isTrips === 0) {
  render(siteEventsElement, new NoItemComponent());
} else {
  render(siteInfoElement, new InfoComponent(tripArray),
      RenderPosition.AFTERBEGIN);
  render(siteEventsElement, new SortComponent());
  const itemsComponent = new ItemsComponent();
  render(siteEventsElement, itemsComponent);

  const tripController = new TripController(itemsComponent);
  tripController.render(tripArray);
}
