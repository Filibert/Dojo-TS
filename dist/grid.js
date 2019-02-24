"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cell_1 = require("./cell");
var Grid = /** @class */ (function () {
    function Grid() {
        this.cells = [];
        this.dimenson = { x: 10, y: 10 };
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                var cell = new cell_1.Cell(i, j, this);
                if (i >= 4 && j >= 6 && i <= 7 && j <= 7)
                    cell.isAlive = true;
                this.cells.push(cell);
            }
        }
    }
    Grid.prototype.print = function () {
        this.cells.sort(function (a, b) {
            return a.coordinates.x > b.coordinates.x ? 1 : -1;
        });
        this.cells.sort(function (a, b) {
            return a.coordinates.y > b.coordinates.y ? 1 : -1;
        });
        var stringsCells = this.cells.map(function (a) { return a.toString(); });
        for (var i = 0; i < this.dimenson.y; i++) {
            var start = this.dimenson.x * i;
            var end = this.dimenson.x * i + this.dimenson.x;
            console.log(stringsCells.slice(start, end));
        }
    };
    return Grid;
}());
exports.Grid = Grid;
