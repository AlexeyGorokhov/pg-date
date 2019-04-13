'use strict';

module.exports = function fromDbString (val) {
  if (val == null) return null;

  const returnValue = new Date(`${val}Z`);

  try {
    returnValue.toISOString();
    return returnValue;
  } catch (err) {
    return null;
  }
};
