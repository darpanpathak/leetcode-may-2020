/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    if(num === 1)
        return 0;
    
    if(num === 0)
        return 1;
    
    const mask = Math.pow(2, num.toString(2).length) - 1;
    return ~num & mask;
    
};