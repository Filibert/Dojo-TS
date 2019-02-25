"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var grid_1 = require("./grid");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function gameCycle() {
    var gameIsRunning = false;
    var actualGameGrid = new grid_1.Grid(5);
    actualGameGrid.print();
    console.log("--------");
    actualGameGrid.cells = actualGameGrid.cells.map(function (cellRow) {
        return cellRow.map(function (cell) {
            return cell.processTurn(actualGameGrid);
        });
    });
    actualGameGrid.print();
    console.log("--------");
    actualGameGrid.cells = actualGameGrid.cells.map(function (cellRow) {
        return cellRow.map(function (cell) {
            return cell.processTurn(actualGameGrid);
        });
    });
    actualGameGrid.print();
}
gameCycle();
