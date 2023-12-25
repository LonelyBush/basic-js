const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let emptyMatrixField = []
  //  let completeMatrix = []
    
     for(let k = 0; k<matrix.length; k++){
      emptyMatrixField[k] = []
        for(let l = 0; l<matrix[k].length; l++){
            emptyMatrixField[k][l] = 0
        }
    }
    
    
    
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[i].length; j++){
            
            if(matrix[i][j] == true){
                  checkForTile(i-1,j-1)
                  checkForTile(i-1,j)
                  checkForTile(i-1,j+1)
                  checkForTile(i,j-1)
                  checkForTile(i,j+1)
                  checkForTile(i+1,j-1)
                  checkForTile(i+1,j)
                  checkForTile(i+1,j+1)
            }
            
            
        }
    }
//   console.log(completeMatrix)

    return emptyMatrixField
    
    function checkForTile(row,colom){
   if(row>=0 && row< emptyMatrixField.length && colom>=0 && colom<emptyMatrixField[0].length) {
    return emptyMatrixField[row][colom]++   
   }
}
}

module.exports = {
  minesweeper
};
