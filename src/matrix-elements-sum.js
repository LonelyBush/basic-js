const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let resultArr = []
        if(matrix.length > 1){
              for(let i =0;i<matrix.length; i++){
      for(let j = 0; j<matrix[i].length; j++){
    //  console.log(n[2][0])
          if(matrix[i-1] == undefined){
              if(matrix[i][j] > 0 ){
                  resultArr.push(matrix[i][j])
              }
              
          } else if (matrix[i-1][j] !== 0){
              resultArr.push(matrix[i][j])   
          }
              
          }
    }
    
    return resultArr.reduce((acc,cur) => acc + cur);
        } else {
            return 0
        }
}

module.exports = {
  getMatrixElementsSum
};
