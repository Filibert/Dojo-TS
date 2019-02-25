"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var life_tools_1 = require("./life-tools");
var Cell = /** @class */ (function () {
    function Cell(x, y, grid, neigboorCoordinates) {
        this.coordinates = {
            x: x,
            y: y
        };
        if (neigboorCoordinates) {
            this.neigboorCoordinates = neigboorCoordinates;
        }
        else {
            this.neigboorCoordinates = life_tools_1.getNeighboors(this.coordinates, grid);
        }
    }
    Cell.prototype.processTurn = function (state) {
        var _this = this;
        var neighboorsCell = [];
        state.cells.forEach(function (cellRow) {
            var cells = cellRow.filter(function (cell) {
                return _this.neigboorCoordinates.some(function (coordinate) {
                    return (cell.coordinates.x === coordinate.x &&
                        cell.coordinates.y === coordinate.y);
                });
            });
            neighboorsCell = neighboorsCell.concat(cells);
        });
        if (this.isAlive) {
            if (life_tools_1.ShouldDie(neighboorsCell)) {
                var cell = new Cell(this.coordinates.x, this.coordinates.y, undefined, this.neigboorCoordinates);
                cell.isAlive = false;
                return cell;
            }
            return this;
        }
        else {
            if (life_tools_1.ShouldBorn(neighboorsCell)) {
                var cell = new Cell(this.coordinates.x, this.coordinates.y, undefined, this.neigboorCoordinates);
                cell.isAlive = true;
                return cell;
            }
            return this;
        }
    };
    Cell.prototype.toString = function () {
        if (this.isAlive)
            return "o";
        return "x";
    };
    return Cell;
}());
exports.Cell = Cell;
