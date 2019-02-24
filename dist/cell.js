"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var life_tools_1 = require("./life-tools");
var Cell = /** @class */ (function () {
    function Cell(x, y, grid) {
        this.coordinates = {
            x: x,
            y: y
        };
        this.neigboorCoordinates = life_tools_1.getNeighboors(this.coordinates, grid).map(function (a) { return a.coordinates; });
    }
    Cell.prototype.processTurn = function (state) {
        var _this = this;
        var neighboorsCell = state.cells.filter(function (cell) { return _this.neigboorCoordinates.some(function (coordinate) { return cell.coordinates === coordinate; }); });
        if (this.isAlive) {
            if (life_tools_1.ShouldDie(neighboorsCell)) {
                this.isAlive = false;
            }
        }
        else {
            if (life_tools_1.ShouldBorn(neighboorsCell)) {
                this.isAlive = true;
            }
        }
    };
    Cell.prototype.toString = function () {
        if (this.isAlive)
            return this.coordinates.x.toString();
        return this.coordinates.x.toString();
    };
    return Cell;
}());
exports.Cell = Cell;
