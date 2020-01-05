import AbstractComponent from "./abstract-component";

const createItemsTemplate = () => {
  return (
    `<ul class="trip-days"></ul>`
  );
};

export default class Items extends AbstractComponent {
  getTemplate() {
    return createItemsTemplate();
  }
}
