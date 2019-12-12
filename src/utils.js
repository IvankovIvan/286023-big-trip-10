export const getRandomIntegerNumber = (max = 1000, min = 0) => {
  return min + Math.round((max - min) * Math.random());
};

export const generateArrayEmpty = (count, valueFill = ``) => {
  return new Array(count)
    .fill(valueFill);
};
