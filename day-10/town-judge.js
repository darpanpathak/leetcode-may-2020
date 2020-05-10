/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    
    if(N === 1) {
        return 1;
    }
    
    if(trust.length === 1) {
        return trust[0][1];
    }
    
    const trustMap = {};
    const tjMap = {};
    
    for(let item of trust) {
        
        if(!trustMap[item[0]]) {
            trustMap[item[0]] = true;
        }
        
        if(!trustMap[item[1]]){
            if(tjMap[item[1]]) {
                tjMap[item[1]] += 1;
            } else {
                tjMap[item[1]] = 1;
            }
        }
        
        if(tjMap[item[0]]) {
            delete tjMap[item[0]];
        }
        
    }
    
    const keys = Object.keys(tjMap);
    
    if(keys.length === 1) {
        return tjMap[keys[0]] === N - 1 && !trustMap[keys[0]] ? keys[0] : -1;   
    }
    
    return -1;
};

// 2
// [[1,2],[2,1]] -1
// 4
// [[1,3],[1,4],[2,3],[2,4],[4,3]] 3
// 3
// [[1,2],[2,3]] -1
// 1
// [] 1
// 3
// [[1,3],[2,3]] 2
// 3
// [[1,3],[2,3],[3,1]] -1
// 4
// [[1,2],[1,3],[2,1],[2,3],[1,4],[4,3],[4,1]] 3