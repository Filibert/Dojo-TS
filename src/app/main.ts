import * as readline from 'readline';
import { Grid } from './grid';


let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function gameCycle(): void {
    let gameIsRunning: boolean = false;
    let actualGameGrid: Grid = new Grid(5);
    actualGameGrid.print();
    console.log("--------");
    actualGameGrid.cells = actualGameGrid.cells.map(cellRow => {
        return cellRow.map(cell => {
           return cell.processTurn(actualGameGrid);
        });
    });
    actualGameGrid.print();
    console.log("--------");
    actualGameGrid.cells = actualGameGrid.cells.map(cellRow => {
        return cellRow.map(cell => {
           return cell.processTurn(actualGameGrid);
        });
    });
    actualGameGrid.print();
}
gameCycle();