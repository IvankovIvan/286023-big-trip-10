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

export const createFilterTemplate = (filterArr) => {
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

