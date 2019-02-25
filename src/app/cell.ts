import { Grid } from "./grid";
import { Processable } from "./@types/Processable.d";
import { TwoDimensionalCoordinates } from "./@types/TwoDimensionalCoordinates";
import { ShouldDie, getNeighboors, ShouldBorn } from "./life-tools";

export class Cell implements Processable<Grid> {
  coordinates: TwoDimensionalCoordinates;
  isAlive: boolean;
  neigboorCoordinates: TwoDimensionalCoordinates[];

  constructor(x: number, y: number, grid: Grid, neigboorCoordinates: TwoDimensionalCoordinates[]) {
    this.coordinates = {
      x: x,
      y: y
    };
    if(neigboorCoordinates){
      this.neigboorCoordinates = neigboorCoordinates;
    }else{
      this.neigboorCoordinates = getNeighboors(this.coordinates, grid);
    }
  }

  processTurn(state: Grid): Cell {
    let neighboorsCell: Cell[] = [];
    state.cells.forEach(cellRow => {
      const cells = cellRow.filter(cell => {
        return this.neigboorCoordinates.some(coordinate => {
          return (
            cell.coordinates.x === coordinate.x &&
            cell.coordinates.y === coordinate.y
          );
        });
      });
      neighboorsCell = neighboorsCell.concat(cells);
    });
    if (this.isAlive) {
      if (ShouldDie(neighboorsCell)) {
        const cell =  new Cell(this.coordinates.x, this.coordinates.y, undefined, this.neigboorCoordinates);
        cell.isAlive = false;
        return cell;
      }
      return this;
    } else {
      if (ShouldBorn(neighboorsCell)) {
        const cell =  new Cell(this.coordinates.x, this.coordinates.y, undefined, this.neigboorCoordinates);
        cell.isAlive = false;
        return cell;      
      }
      return this;
    }
  }
  toString(): string {
    if (this.isAlive) return "o";
    return "x";
  }
}
