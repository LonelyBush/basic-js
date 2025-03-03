const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n ) {
  let transformString = n.split("-");
  let answerArr = [];
  if (transformString.length < 6){
      return false
  } else if(transformString.length ==6){
      
    transformString.forEach((elem) => {
          for (let i = 0; i<elem.length; i++){
                  
                  if(elem[i].charCodeAt() >= 65 && elem[i].charCodeAt() <= 70 || elem[i].charCodeAt() >= 48 && elem[i].charCodeAt() <= 57){
                      
                       answerArr.push(true)
                       
                  } else{
                      answerArr.push(false)
                     
                  }
          }
      })
      
  
  }
  
  if (answerArr.includes(false)){
      return false
  } else {
      return true
  }
  
  
}
module.exports = {
  isMAC48Address
};
