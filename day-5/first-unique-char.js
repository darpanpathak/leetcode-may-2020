/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hashMap = {};
    let char = '';
    for(let item of s){
        if(hashMap[item]) {
            hashMap[item] += 1;
        } else {
            hashMap[item] = 1;
        }
    }
    
    for(let item in hashMap) {
        if(hashMap[item] === 1) {
            char = item;
            break;
        }
    }
    
    return char ? s.indexOf(char) : -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));