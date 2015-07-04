var moment = require('moment');

module.exports = function (value, method, args) {
  return moment(value)[method](args);
}
