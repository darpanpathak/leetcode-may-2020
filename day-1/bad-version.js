/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        if(n === 0)
            return -1;

        if(isBadVersion(1))
            return 1;

        let max = n;
        let min = 0;

        while (max !== min) {
            const middle = Math.floor((max + min) / 2);
            const isVersionBad = isBadVersion(middle);

            if (isVersionBad) {
                max = middle;
            } else {
                min = middle + 1;
            }
        }

        return max;
    };
};

function isBadVersion(version) {
    return version >= 3;
}

const result = solution(isBadVersion)(5);
console.log(result);