
import { TwoDimensionalCoordinates } from './@types/TwoDimensionalCoordinates.d';
import { ShouldDie, ShouldBorn, getNeighboors } from './life-tools';

import * as readline from 'readline';
import { Grid } from './grid';


let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

enum InterstingNeighboorHood {
    TWO_NEIGBOORS = 2,
    THREE_NEIGBOORS = 3,
    WELL_ACCOMPAGNED = TWO_NEIGBOORS | THREE_NEIGBOORS
}


function gameCycle(): void {
    let gameIsRunning: boolean = false;
    let actualGameGrid: Grid= new Grid();
    actualGameGrid.print();
}
gameCycle();