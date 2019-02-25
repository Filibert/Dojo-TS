"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cell_1 = require("./cell");
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var Grid = /** @class */ (function () {
    function Grid(size) {
        this.cells = [];
        this.dimenson = { x: size, y: size };
        for (var i = 0; i < size; i++) {
            var cellRow = [];
            for (var j = 0; j < size; j++) {
                var cell = new cell_1.Cell(j, i, this, undefined);
                if (getRandomInt(10) < 3)
                    cell.isAlive = true;
                cellRow.push(cell);
            }
            this.cells.push(cellRow);
        }
    }
    Grid.prototype.print = function () {
        this.cells.sort(function (a, b) {
            return a[0].coordinates.y > b[0].coordinates.y ? 1 : -1;
        });
        this.cells.forEach(function (cellsRow) {
            cellsRow.sort(function (a, b) {
                return a.coordinates.x > b.coordinates.x ? 1 : -1;
            });
        });
        for (var i = 0; i < this.dimenson.y; i++) {
            console.log(this.cells[i].map(function (a) { return a.toString(); }));
        }
    };
    return Grid;
}());
exports.Grid = Grid;
