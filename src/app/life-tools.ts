 
import { TwoDimensionalCoordinates } from './@types/TwoDimensionalCoordinates';
import { Grid } from './grid';
import { Cell } from './cell';

export const ShouldDie = (neighboors: Cell[]): boolean => {
    const aliveNeighboors = neighboors.filter((cell: Cell) => cell.isAlive); 
    return !(aliveNeighboors.length == 2 || aliveNeighboors.length == 3);
};

export const ShouldBorn = (neighboors: Cell[]): boolean => {
    const aliveNeighboors = neighboors.filter((cell: Cell) => cell.isAlive); 
    return aliveNeighboors.length == 3;
};

// export const giveBirthToACell = (cell: Cell): Cell => {
//     return {
//         ...cell,
//         isAlive: true
//     };
// };

export const isAdjacent = (value: number, valueCompare: number): boolean => {
    return valueCompare === value + 1
        || valueCompare === value - 1
        || valueCompare === value;
};

export const getNeighboors = (pos: TwoDimensionalCoordinates, grid: Grid): Cell[] => {
    const neighboors = grid.cells.filter(cell => {
        return this.isAdjacent(pos.x, cell.coordinates.x)
            && this.isAdjacent(pos.y, cell.coordinates.y)
    });
    return neighboors;
};

// export const killCell = (cell: Cell): Cell => {
//     return {
//         ...cell,
//         isAlive: false
//     };
// };

