var removeKdigits = function (num, k) {
    if (k == 0) return num;
    if (k >= num.length) return "0";
    var arr = num.split("");
    var m = arr.length;
    var stack = [];
    for (let i = 0; i < m; i++) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > arr[i]) {
            stack.pop();
            k--;
        }
        stack.push(arr[i]);
    }

    console.log(stack);
    stack = k > 0 ? stack.slice(0, -k) : stack;
    return stack.join('').replace(/^0+/, '') || '0';
};

function main() {
    const nums = "1432219";
    const k = 3;
    const result = removeKdigits(nums, k);
    console.log(result);
}

main();