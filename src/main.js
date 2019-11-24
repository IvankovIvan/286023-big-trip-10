import {createInfoTemplate} from './components/info.js';
import {createMenuTemplate} from './components/menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createSortTemplate} from './components/sort.js';
import {createEditTemplate} from './components/edit.js';
import {createItemsTemplate} from './components/items.js';
import {createItemTemplare} from './components/item.js';

const ITEM_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const createArray = (count, element) => {
  new Array(count).fill(``)
    .forEach(() => render(element, createItemTemplare()));
};

const siteMainElement = document.querySelector(`.page-body`);
const siteInfoElement = siteMainElement.querySelector(`.trip-main__trip-info`);

render(siteInfoElement, createInfoTemplate(), `afterbegin`);

const siteControlElement = siteMainElement
  .querySelector(`.trip-main__trip-controls`);

render(siteControlElement.firstElementChild, createMenuTemplate(), `afterend`);
render(siteControlElement, createFilterTemplate());

const siteEventsElement = siteMainElement.querySelector(`.trip-events`);
render(siteEventsElement, createSortTemplate());
render(siteEventsElement, createEditTemplate());
render(siteEventsElement, createItemsTemplate());

createArray(ITEM_COUNT, siteEventsElement.lastElementChild);
