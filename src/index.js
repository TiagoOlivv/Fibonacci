"use strict";

const fibonacci = () => {
  const values = [0, 1];
  for (let i = 2; i <= 14; i++) {
    values[i] = values[i - 2] + values[i - 1];
  }
  return values;
};

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonnaci,
};
