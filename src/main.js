import InfoComponent from './components/info.js';
import PriceComponent from './components/price.js';
import MenuComponent from './components/menu.js';
import FilterComponent from './components/filter.js';
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

if (tripArray.length > 0) {
  render(siteInfoElement, new InfoComponent(tripArray),
      RenderPosition.AFTERBEGIN);
  const tripController =
      new TripController(siteMainElement.querySelector(`.trip-events`));
  tripController.render(tripArray);
}
