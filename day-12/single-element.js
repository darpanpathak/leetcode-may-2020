/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    if (nums.length == 1) return nums[0];

    return bt(nums, nums.length, 0);
};

function bt(nums, max, min) {

    if (min > max) {
        return;
    }

    if (min === max) {
        return nums[min];
    }

    const md = Math.floor((max + min) / 2);

    if (md % 2 === 0) {
        return nums[md] === nums[md + 1] ? bt(nums, max, md + 2) : bt(nums, md, min);
    } else {
        return nums[md] === nums[md - 1] ? bt(nums, max, md + 1) : bt(nums, md - 1, min);
    }

}