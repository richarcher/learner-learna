'use strict';

module.exports = todayDate;

function todayDate(name) {
  const date = new Date();
  if (name) {
    return `Hello, ${name}, the time and date is ${date}`;
  }
  return `The time and date is ${date}!`;
}