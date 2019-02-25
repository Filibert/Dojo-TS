"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShouldDie = function (neighboors) {
    var aliveNeighboors = neighboors.filter(function (cell) { return cell.isAlive; });
    return !(aliveNeighboors.length == 2 || aliveNeighboors.length == 3);
};
exports.ShouldBorn = function (neighboors) {
    var aliveNeighboors = neighboors.filter(function (cell) { return cell.isAlive; });
    return aliveNeighboors.length == 3;
};
exports.isAdjacent = function (value, valueCompare) {
    return (valueCompare === value + 1 ||
        valueCompare === value - 1 ||
        valueCompare === value);
};
exports.getNeighboors = function (pos, grid) {
    var neighboorsPos = [
        { x: pos.x, y: pos.y - 1 },
        { x: pos.x, y: pos.y + 1 },
        { x: pos.x - 1, y: pos.y },
        { x: pos.x + 1, y: pos.y },
        { x: pos.x + 1, y: pos.y + 1 },
        { x: pos.x + 1, y: pos.y - 1 },
        { x: pos.x - 1, y: pos.y + 1 },
        { x: pos.x - 1, y: pos.y - 1 },
    ];
    return neighboorsPos.filter(function (pos) { return isInTheGrid(pos, grid.dimenson); });
};
var isInTheGrid = function (pos, dimension) {
    return pos.x > 0 && pos.x < dimension.x && pos.y > 0 && pos.y < dimension.y;
};
