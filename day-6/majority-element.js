/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  
    const numObj = {};
    let selected = nums[0], max = 0;
    
    for(let item of nums) {
        if(numObj[item]){
            numObj[item] += 1;
            
            if(numObj[item] > max){
                selected = item;
                max = numObj[item];
            }
        }
        else{
            numObj[item] = 1;
        }
    }
    
    return selected;
    
};

console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2