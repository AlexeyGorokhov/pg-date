'use strict';

module.exports = function fromDbString (val) {
  return new Date(`${val}Z`);
};
