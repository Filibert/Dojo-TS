import { Grid } from "./grid";
import { Processable } from './@types/Processable.d';
import { TwoDimensionalCoordinates } from "./@types/TwoDimensionalCoordinates";
import { ShouldDie, getNeighboors, ShouldBorn } from './life-tools';

export class Cell implements Processable<Grid>{
    coordinates: TwoDimensionalCoordinates;
    isAlive: boolean;
    neigboorCoordinates: TwoDimensionalCoordinates[];

    constructor(x: number, y: number, grid: Grid) {
        this.coordinates = {
            x: x,
            y: y
        };
        this.neigboorCoordinates = getNeighboors(this.coordinates, grid).map(a => a.coordinates);
    }

    processTurn(state: Grid): void {
        const neighboorsCell = state.cells.filter(cell => this.neigboorCoordinates.some(coordinate => cell.coordinates === coordinate))
        if (this.isAlive) {
            if (ShouldDie(neighboorsCell)){
                this.isAlive = false;
            }
        }
        else{
            if(ShouldBorn(neighboorsCell)){
                this.isAlive = true;
            }
        }
    }
    toString(): string {
        if (this.isAlive)
            return this.coordinates.x.toString();
        return this.coordinates.x.toString();
    }
}