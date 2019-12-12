const createMenuMarkup = (menuName, isActive) => {
  return (
    `<a class="trip-tabs__btn
      ${isActive ? `trip-tabs__btn--active` : ``}" href="#">${menuName}</a>`
  );
};

export const createMenuTemplate = (menuArr) => {
  const menu = menuArr.map((it, i) => createMenuMarkup(it, i === 0))
    .join(`\n`);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      ${menu}
    </nav>`
  );
};

