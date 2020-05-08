/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {

    const initSlope = slope(coordinates[0][0], coordinates[0][1], coordinates[1][0], coordinates[1][1]);

    for (let i = 1; i < coordinates.length - 1; i++) {
        const currentSlope = slope(coordinates[i][0], coordinates[i][1], coordinates[i + 1][0], coordinates[i + 1][1]);

        if (currentSlope !== initSlope) {
            return false;
        }

    }

    return true;
};

function slope(x1, y1, x2, y2) {
    return (y2 - y1) / (x2 - x1);
}


const input1 = [[-3, -2], [-1, -2], [2, -2], [-2, -2], [0, -2]];
const input2 = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
const input3 = [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]];
const input4 = [[0, 1], [1, 3], [-4, -7], [5, 11]];

console.log(checkStraightLine(input1));
console.log(checkStraightLine(input2));
console.log(checkStraightLine(input3));
console.log(checkStraightLine(input4));