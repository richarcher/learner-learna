'use strict';

module.exports = todayDate;

function todayDate() {
  const date = new Date();
  return `The time and date is ${date}!`;
}