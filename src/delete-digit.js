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
  console.debug(n)
  let newArr = n.toString().split("")
  let newNumArr = []
  let newStrArr = []
for (let i =0; i<newArr.length; i++){
  newNumArr.push(Number(newArr[i]))
}
let min = Math.min.apply(null, newNumArr)
console.log(min)
 newNumArr.forEach(function(elem){
  newStrArr.push(elem.toString())
})
let replaced = newStrArr.join('').replace(min.toString(), '')

return Number(replaced);
}

module.exports = {
  deleteDigit
};
