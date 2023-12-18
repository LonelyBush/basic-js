const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let splitN = n.toString().split("").map(Number)
  let arr = []
  let maxArr = []
  

  
for (let i = 0; i<splitN.length; i++){
  let arrVal = splitN.slice()
  arrVal.splice(i,1);
  arr.push(arrVal)
}

for (let k = 0; k<arr.length; k++){
maxArr.push(Number(arr[k].join("")))
}

return Math.max.apply(null, maxArr)
}

module.exports = {
  deleteDigit
};
