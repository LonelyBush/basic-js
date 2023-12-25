const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
   
    if (!options.additionSeparator){
        options.additionSeparator = '|'
    }if (!options.additionRepeatTimes){
        options.additionRepeatTimes = 0;
    }

    if (options.addition === null){
        options.addition =  JSON.stringify(options.addition)
    }
    
    if (options.addition == undefined){
        options.addition =  ""
    }
   
    if (!options.separator){
        options.separator = "+"
    }if (!options.repeatTimes){
        options.repeatTimes = 1;
    } 
        let compareStr = [];
        let compareAddition = []
        compareAddition.push(options.addition)
        for(let i = 1; i<options.additionRepeatTimes; i++){
            compareAddition.push(("" + options.addition))
        }
       compareAddition = compareAddition.join(options.additionSeparator)
       
        for(let i = 1; i<=options.repeatTimes; i++){
            compareStr.push( str + compareAddition);
        }
        
        //onsole.log(compareAddition, compareStr)
    
    
    return compareStr.join(options.separator)
}


module.exports = {
  repeater
};
