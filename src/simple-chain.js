const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  resultChain: [],
   
  getLength() {
    return this.resultChain.length;

  },
  
  addLink(value) {
      
      if(value === undefined){
          this.resultChain.push(`(  )`)
      }else {
          this.resultChain.push(`( ${value} )`)
      }
     return this

  },
  removeLink(position) {
    if(position <= 0 || position > this.resultChain.length || typeof position === "string"){
      this.resultChain =[]
       throw new Error('You can\'t remove incorrect link!')
   }else{
       this.resultChain.splice(position-1,1);
   }
   
       
       return this
    
  },
  reverseChain() {
         this.resultChain.reverse()
        return this
  },
  finishChain() {
    let finishChain = this.resultChain.join("~~")
     this.resultChain = []
     return finishChain

  }

};

module.exports = {
  chainMaker
};
