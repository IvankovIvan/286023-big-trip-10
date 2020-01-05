import AbstractComponent from "./abstract-component";

const noItemTemplate = () => {
  return (
    `<p class="trip-events__msg">Click New Event to create your first point
    </p>`
  );
};

export default class NoItem extends AbstractComponent {
  getTemplate() {
    return noItemTemplate();
  }
}

