const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {

  if (typeof(sampleActivity) == 'number'|| typeof(sampleActivity) =='object' || isNaN(sampleActivity) ){
    return false
  } 
    let convertedNum = Number(sampleActivity) 
  if (isNaN(convertedNum) || convertedNum == 0 || convertedNum > 15 || convertedNum <= 0) {
    return false;
  }else {
    
      let k = (0.693/ 5730)
     let t = Math.ceil(-(Math.log(convertedNum/MODERN_ACTIVITY)/k))
     return t
    }
  
  
}

module.exports = {
  dateSample
};
