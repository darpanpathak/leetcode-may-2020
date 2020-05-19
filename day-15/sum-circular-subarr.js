var maxSubarraySumCircular = function(A) {
    let maxSum = A[0];
    let prevMax = 0;
    let minSum = A[0];
    let prevMin = 0;
	let total = 0;
    let allNegative = true;
    
    for(let n of A) {
        prevMax > 0 ? prevMax += n : prevMax = n;
        prevMin < 0 ? prevMin += n : prevMin = n;
        
        if(prevMax > maxSum) maxSum = prevMax;
        if(prevMin < minSum) minSum = prevMin;
		
        if(n > 0) allNegative = false;
        total += n;
    }
    
    if(allNegative) return maxSum;
    return Math.max(maxSum, (total - minSum));
};

console.log(maxSubarraySumCircular([5,-3,5]));