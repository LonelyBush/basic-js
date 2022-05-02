const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {

  if (!(Object.prototype.toString.call(arr) === '[object Array]')){
    throw new Error( '\'arr\' parameter must be an instance of the Array!')
  }
  let newArr = [];
      for(let i =0; i<arr.length; i++){
        newArr.push(arr[i])
      }

      newArr.forEach(function(elem, i){
        if(elem==='--discard-next' && elem[i+1]){
          newArr.splice(i, 2)
        } if (elem=== '--discard-prev'&& elem[i-1]){
          newArr.splice(i-1, 2)
        } if (elem ==='--double-next'&& elem[i+1] ){
          newArr.splice(i,1,newArr[i+1] )
        }if(elem=== '--double-prev'&& elem[i-1] ){
         newArr.splice(i, 1, newArr[i-1])
        }
      })
      let filtered = newArr.filter (function(e){
        if(e !=='--double-next' && e !== '--double-prev' && e !=='--discard-prev' && e !=='--discard-next'){
          return e;
        }
      })

   
return filtered;
      }

module.exports = {
  transform
};
