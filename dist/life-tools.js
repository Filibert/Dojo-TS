"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShouldDie = function (neighboors) {
    var aliveNeighboors = neighboors.filter(function (cell) { return cell.isAlive; });
    return !(aliveNeighboors.length == 2 || aliveNeighboors.length == 3);
};
exports.ShouldBorn = function (neighboors) {
    var aliveNeighboors = neighboors.filter(function (cell) { return cell.isAlive; });
    return aliveNeighboors.length == 3;
};
// export const giveBirthToACell = (cell: Cell): Cell => {
//     return {
//         ...cell,
//         isAlive: true
//     };
// };
exports.isAdjacent = function (value, valueCompare) {
    return valueCompare === value + 1
        || valueCompare === value - 1
        || valueCompare === value;
};
exports.getNeighboors = function (pos, grid) {
    var neighboors = grid.cells.filter(function (cell) {
        return _this.isAdjacent(pos.x, cell.coordinates.x)
            && _this.isAdjacent(pos.y, cell.coordinates.y);
    });
    return neighboors;
};
// export const killCell = (cell: Cell): Cell => {
//     return {
//         ...cell,
//         isAlive: false
//     };
// };
