import ItemComponent from "../components/item";
import EditComponent from "../components/edit";
import {render, replace} from "../utils/render";
import {TRIP_POINT_VIEW} from "../const";
import ItemDayComponent from "../components/itemDay";

const renderTrip = (element, trip) => {
  const tripComponent = new ItemComponent(trip);
  let editComponent = new EditComponent(trip);

  const replaceEditTask = () => {
    replace(tripComponent, editComponent);
    editComponent = new EditComponent(trip);
    editComponent.setSubmitHandler(replaceEditTask);
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

export default class TripController {
  constructor(container) {
    this._container = container;
  }

  render(trips) {
    const container = this._container.getElement();
    createTripList(trips, container);
  }
}
