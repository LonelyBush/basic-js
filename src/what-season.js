const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  console.debug(date)
  if (date == undefined){
    return 'Unable to determine the time of year!'
     }  if ( typeof(date) == 'function' && anonymous === undefined ||typeof(date) == 'string'||Array.isArray(date) === true ||Object.prototype.toString.call(date) === '[object Object]' ||typeof (date) ==='number' ){
      return 'Invalid date!'
    } 
  
  
    if( date.getMonth() <= 1 || date.getMonth()== 0 || date.getMonth() == 11){
      return 'winter'
    } if (date.getMonth() <= 4 || date.getMonth() == 2){
      return 'spring'
    }if (date.getMonth() <= 7 || date.getMonth() == 5){
      return 'summer'
    }if (date.getMonth() <= 10 || date.getMonth() == 8){
      return 'autumn'
    }
  
  
  }
module.exports = {
  getSeason
};
