export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTERNODE: `afternode`
};

export const getRandomIntegerNumber = (max = 1000, min = 0) => {
  return min + Math.round((max - min) * Math.random());
};

export const generateArrayEmpty = (count, valueFill = ``) => {
  return new Array(count)
    .fill(valueFill);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const renderElement = (container, element, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.AFTERNODE:
      container.after(element);
      break;
    case RenderPosition.BEFOREEND:
    default:
      container.append(element);
      break;
  }
};
