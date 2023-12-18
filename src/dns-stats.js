const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let mapedArr = domains.map((elem) => elem.split("."))
    let newArr = []
    let count = {}
   let con = 1;
    for( let i = 0; i<mapedArr.length; i++){
        if (mapedArr.length >= 3){
        newArr.push(mapedArr[i].slice(con+1, mapedArr.length))
        con = 1
        newArr.push(mapedArr[i].slice(con, mapedArr.length))
        newArr.push(mapedArr[i])
        } else if (mapedArr.length <3){
            newArr.push(mapedArr[i].slice(con+1, mapedArr.length+1))
        newArr.push(mapedArr[i].slice(con, mapedArr.length+1))
        newArr.push(mapedArr[i])
        }
        
        
        
    }
    
    let elemToStr = newArr.map((elem) => elem.reverse().join('.')).filter((elem) => elem != "")
    let elemAddPoint = elemToStr.map((elem) => "." + elem)

for (let k = 0; k < elemAddPoint.length; k++) {
  count[elemAddPoint[k]] = (count[elemAddPoint[k]] || 0) + 1;
}
     return count
}

module.exports = {
  getDNSStats
};
