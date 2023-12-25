const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  
  let cutOff = arr.map((el) => {
    if(el !== -1){
        return ""
    }else {
        return -1
    }
})
console.log(cutOff)


let sorted = arr.sort(function(a,b){
  if(a < b) return -1;
    if(b < a) return 1; 
}).filter((elem)=> elem !== -1);

for (let i = 0; i<cutOff.length; i++){
 if(cutOff[i] === ""){
     cutOff[i] = sorted.shift()
 } 
}

return cutOff
}

module.exports = {
  sortByHeight
};
