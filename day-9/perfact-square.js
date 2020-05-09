/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    if(num == 1)
        return true;
    
    return getSquare(num, 0, num);
};

function getSquare(num, min, max){
    
    const middleNum = Math.ceil((max + min) / 2);
    
    if(middleNum === max){
        return false;
    }
    
    const tempSquare = middleNum * middleNum;
    
    if(tempSquare === num){
        return true;
    } else if(tempSquare > num) {
        return getSquare(num, min, middleNum);
    } else {
        return getSquare(num, middleNum, max);
    }
     
}