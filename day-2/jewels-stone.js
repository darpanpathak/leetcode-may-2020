/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    const jewels = {};
    for (let item of J) {
        jewels[item] = item;
    }

    let count = 0;

    for (let item of S) {
        if (jewels[item])
            count++;
    }

    return count;
};

console.time("1");
console.log(numJewelsInStones("aA", "aAAbbbb"));