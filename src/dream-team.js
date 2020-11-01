const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  return members.filter(element => typeof(element) === 'string')
  .map(element => element.trim())
  .map(element => element[0].toUpperCase())
  .map(element => element[0]).sort().join('');
};
