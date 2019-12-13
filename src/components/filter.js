import {createElement} from "../utils";

const createFilterItem = (filterName, isChecked) => {
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${filterName.toLowerCase()}"
        class="trip-filters__filter-input  visually-hidden"
        type="radio" name="trip-filter" value="${filterName.toLowerCase()}" "
        ${isChecked ? `checked` : ``}>
      <label class="trip-filters__filter-label"
        for="filter-everything">${filterName}</label>
    </div>`
  );
};

const createFilterTemplate = (filterArr) => {
  const filters = filterArr
    .map((filter, i) => createFilterItem(filter, i === 0))
    .join(`\n`);
  return (
    `<form class="trip-filters" action="#" method="get">
      ${filters}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export default class Filter {
  constructor(filterArray) {
    this._filterArray = filterArray;
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filterArray);
  }

  getElement() {
    this._element = createElement(this.getTemplate());

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

