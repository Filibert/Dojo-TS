"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var grid_1 = require("./grid");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var InterstingNeighboorHood;
(function (InterstingNeighboorHood) {
    InterstingNeighboorHood[InterstingNeighboorHood["TWO_NEIGBOORS"] = 2] = "TWO_NEIGBOORS";
    InterstingNeighboorHood[InterstingNeighboorHood["THREE_NEIGBOORS"] = 3] = "THREE_NEIGBOORS";
    InterstingNeighboorHood[InterstingNeighboorHood["WELL_ACCOMPAGNED"] = 3] = "WELL_ACCOMPAGNED";
})(InterstingNeighboorHood || (InterstingNeighboorHood = {}));
function gameCycle() {
    var gameIsRunning = false;
    var actualGameGrid = new grid_1.Grid();
    actualGameGrid.print();
}
gameCycle();
