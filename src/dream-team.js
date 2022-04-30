const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let dreamteam = []
  if(Object.prototype.toString.call(members) === '[object Object]'|| typeof(members) == 'number'|| members == null|| members == false){
    return false;
  }

  let filtered = members.filter(function(elem){
    if (typeof(elem)=='string'){
      return elem;
    }
      })
  for (let i = 0; i<filtered.length; i++){
    let trim = filtered[i].trim()
    let upFirstLet =trim[0].toUpperCase()
    dreamteam.push(upFirstLet)
  }


  return dreamteam.sort().join('').trim()
}

module.exports = {
  createDreamTeam
};
