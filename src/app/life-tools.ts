import { TwoDimensionalCoordinates } from "./@types/TwoDimensionalCoordinates";
import { Grid } from "./grid";
import { Cell } from "./cell";

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
  return (
    valueCompare === value + 1 ||
    valueCompare === value - 1 ||
    valueCompare === value
  );
};

export const getNeighboors = (
  pos: TwoDimensionalCoordinates,
  grid: Grid
): TwoDimensionalCoordinates[] => {
  const neighboorsPos = [
    { x: pos.x, y: pos.y - 1 },
    { x: pos.x, y: pos.y + 1 },
    { x: pos.x - 1, y: pos.y },
    { x: pos.x + 1, y: pos.y },
    { x: pos.x + 1, y: pos.y +1 },
    { x: pos.x + 1, y: pos.y -1 },
    { x: pos.x - 1, y: pos.y +1 },
    { x: pos.x - 1, y: pos.y -1 },
  ];
  return neighboorsPos.filter(pos => isInTheGrid(pos, grid.dimenson));
};
const isInTheGrid = (
  pos: TwoDimensionalCoordinates,
  dimension: TwoDimensionalCoordinates
): boolean => {
  return pos.x > 0 && pos.x < dimension.x && pos.y > 0 && pos.y < dimension.y;
};
// export const killCell = (cell: Cell): Cell => {
//     return {
//         ...cell,
//         isAlive: false
//     };
// };
